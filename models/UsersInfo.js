const { users } = require(".")

module.exports=(sequelize, DataTypes)=>
{
    const Users= sequelize.define("usersValue",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
  
          firstName: 
          {
              type: DataTypes.STRING,
  
          },
          lastName: 
          {
              type: DataTypes.STRING
          },
          email:
          {
              type: DataTypes.STRING
          },
          mobileNumber:
          {
              type: DataTypes.STRING
          },
          password: 
          {
              type: DataTypes.STRING
          },
          salt: {
              type: DataTypes.STRING
          },
          isActive: 
          {
              type: DataTypes.BOOLEAN
          }
    })


    return Users;

}