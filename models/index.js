
const {Sequelize, DataTypes} = require('sequelize');


const sequelize = new Sequelize('usersinfo', 'root', '',{
    host:"localhost",
    dialect:"mysql",
    pool:{
        max:5,
        min:0,
        idle: 10000

    }
})

sequelize.authenticate().then(()=>
{
    console.log('Database connected Successfuly');
})
.catch(err=>
{
    console.log(err);
})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require('./UsersInfo')(sequelize, DataTypes);
db.sequelize.sync({force:false})
.then(()=>
{
    console.log('Yes re Synced');
}) 
.catch(err=>
    {

        console.log(err);

    })


module.exports= db;