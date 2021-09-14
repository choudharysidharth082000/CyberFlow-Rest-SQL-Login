console.log("this time i will do this");


// ----------------------Declarations -------------------------------------------------------

const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyparser = require('body-parser');

//----------------------------------------------------------------------------------------------

// ----------------------CAlling the connection sequelize -------------------------------------------------------

require('./models/index');
//----------------------------------------------------------------------------------------------


dotenv.config();
const port = process.env.PORT;




// ----------------------Express Route -------------------------------------------------------

const Login = require('./Express Routes/routes');


app.use(bodyparser.urlencoded({ extended: false })); 
// parse application/json
app.use(bodyparser.json())

app.use(Login);





// --------------------------------------------------------------------------------------------




// ----------------------Ports and Server COnfigurations -------------------------------------------------------



app.listen(port,()=>
{
    console.log(`Server up and running in port ${port}`);
})

// -----------------------------------------------------------------------------