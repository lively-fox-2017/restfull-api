'use strict';
const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    createdAt: new Date,
    updatedAt: new Date,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    salt: DataTypes.STRING
  }, {
      hooks: {
      beforeCreate: (user)=>{
        var salt = bcrypt.genSaltSync(8);
        user.salt = salt
        var hash = bcrypt.hashSync(user.password, salt);
        user.password = hash;
      }
    }
  });
  return User;
};
