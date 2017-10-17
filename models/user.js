'use strict';

const isUnique=require('../helpers/isUnique')

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
                  isUnique: isUnique("User", "username"),
                  len: {
                      args: [3],
                      msg: "please fill username min 3 character"
                  }
                }
    } ,
    // DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
                len: {
                    args: [4],
                    msg: "please fill password min 4 character"
                }
              }
    },
    // DataTypes.STRING,
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
