const express = require('express');
const router = express.Router();

const db = require('../models/index');
const generateJWT = require('../utils/generateJWT');
const verifyPass = require('../utils/verifyPassword');
const hashPassword = require('../utils/passwordHash');
const decryptJWT = require('../utils/decryptJWT');

const AdminValidator = require('../Validators/adminValidator');

const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const Users= db.users;


router.post('/login',async (req, res)=>
{
    const email = req.body.email;
    const password = req.body.password;

    
        

    const data ={email, password};
    

    const resultFromJoi = AdminValidator('email password', data);


    if(!resultFromJoi)
    {
        res.status(400).json({
            status: false,
            message: "Invalid Inputs for Field"
        });
    }

    try 
    {
        const user = await Users.findOne({
            where:{
                email: email
            }
        });

        if(!user){
            res.status(404).json({
                status: false,
                message: "User Does not Exist"
            });
        }


        



        const verifier = await verifyPass(password, user.password);
        

       

        if(!verifier)
        {
            res.status(404).json({
                status: false,
                message: "Invalid Username or PAssword"
            })
        }


        const userAccess = generateJWT(user);


        const result= {         

        }

        result.status = true
        result.message = "Login Successful"
        result.admin= user
        result.accessToken = userAccess
        



        // res.send(
        //     status: true,
        //     message : "Login Successful",
        //     admin: user,
        //     accessToken : userAccess
        // )
        

        res.json({
            result           

        })

        

        
        
    }
    catch(err)
    {
        throw new Error(`${err}`);
    }

    

    
   
})

router.post('/signup',async (req,res)=>
{
    const {body} = req;
    

        
        

        const resultFromJoi =  AdminValidator('firstName lastName email password mobileNumber', body);
       
        if(!resultFromJoi)
        {
            res.status(400).json({
                status: false,
                message: "Invalid Inputs for Field"
            });
        }
        

        
        
        console.log(process.env.SALTROUND);

        const {generateSalt, generateHash} =await hashPassword(body.password);
        
        
        

        if(!generateHash)
        {
            res.status(500).json({
                status: false,
                message: "Hashpassword Function failed"
            })
        }

        body.password = generateHash;

        body.salt = generateSalt;

        const newJWT = generateJWT(body);
        

        try{
            const adminEmail = await Users.findOne({
                where:
                {
                    email: body.email
                }
            });
            

            

            if(adminEmail)
            {
                res.status(404).json({
                    status: false,
                    message: "User ALready Exists"
                })
            }

        }
        catch(err)
        {
            throw new Error(`${err}`);
        }


        try 
        {
            const admin = await Users.build(body);
            

            if(!admin)
            {
                res.send(`Something went Wrong`);
            }

                admin.save();

            res.json({
                   status: true,
                   message: "Signup Successfull",
                   user: admin,
                   accessToken: newJWT
               })

            
        }
        catch(err)
        {
            throw new Error(`${err}`)
        }

        

})


const swaggerOptions = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "CyberFlow Rest Login",
        version: "1.0.0",
        description:
          "This is a simple CRUD API application made with Express and documented with Swagger",
        license: {
          name: "CBF",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "Sidharth Choudhary",
          url: "https://time-plot.netlify.app",
          email: "choudharysidharth082000@gmail.com",
        },
      },
      servers: [
        {
          url: "http://localhost:4500",
        },
      ],
    },
    apis: [".Express Routes/routes.js"],
  };

const swaggerDocs = swaggerJsDoc(swaggerOptions);
console.log(swaggerDocs);
 
 
/**
 * @openapi
 * /login:
 *   post:
 *      summary: Login User
 *      description: Login The existing User to the App
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      properties:
 *                          email:
 *                              type: string 
 *                              description: Email for the existing user 
 *                              required: true
 *                          password:
 *                              type: string 
 *                              description: Password for the user 
 *                              required: true
 *      responses:
 *          200:
 *              description: Status Good                
 * 
 *    
 */

/**
 * @openapi
 * /signup:
 *   post:
 *      summary: Signup User
 *      description: Signup The existing User to the App
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      properties:
 *                          email:
 *                              type: string 
 *                              description: Email for the existing user 
 *                              required: true
 *                          password:
 *                              type: string 
 *                              description: Password for the user 
 *                              required: true
 *                          firstName:
 *                              type: string 
 *                              description: First Name for the user 
 *                              required: true
 *                          lastName:
 *                              type: string 
 *                              description: LastName  for the user 
 *                              required: true
 *                          mobileNumber:
 *                              type: number 
 *                              description: Phone for the user 
 *                              required: true
 *                         
 *      responses:
 *          200:
 *              description: Status Good                
 * 
 *    
 */

 router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));



module.exports = router;