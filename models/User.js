'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      unique: true, 
      allowNull: false,
      validate: {
        is: /^[a-z0-9\_\-]+$/i,
      }
    },
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    password: DataTypes.STRING,
    salt: DataTypes.STRING,
    email: {
      type: DataTypes.STRING, 
      unique: true,
      validate: {
        isEmail: true,
      },
    }
  }, {
    classMethods: {
      associate: function(models) {
        User.hasOne(models.Profile);
        // more associations can be defined here
      }
    }
  });
  return User;
};