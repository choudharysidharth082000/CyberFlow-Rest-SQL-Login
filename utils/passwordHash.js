const bcrypt = require('bcrypt');
const saltRounds = process.env.SALTROUND;
console.log('SALt round is ' + saltRounds);


module.exports =async (password) => 
{

    if(!password)
    {
        throw new Error('Password is not loaded in the hasher');
    }

    
    const generateSalt =await  bcrypt.genSalt(12);
    const generateHash =await  bcrypt.hash(password, generateSalt);
    // console.log(generateSalt);
    // console.log(generateHash);

    
   return {generateSalt, generateHash};

}