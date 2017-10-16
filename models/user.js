'use strict';

const isUnique=require('../helpers/isUnique')

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      validate: {
                  isUnique: isUnique("User", "username")
                }
    } ,
    // DataTypes.STRING,
    password: DataTypes.STRING,
    salt: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};
