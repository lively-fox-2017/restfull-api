'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: {
      type:DataTypes.STRING,
      validate:{
        is: /^[a-z]+$/i,
        notEmpty: true,
      },
      allowNull:false,
      unique:true
    },
    password: {
      type:DataTypes.STRING,
      validate:{
        notEmpty: true,
      },
      allowNull:false,
    },
    role: DataTypes.STRING,
    salt: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};
