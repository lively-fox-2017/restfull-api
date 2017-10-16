'use strict';
const bcrypt = require('bcrypt');
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    salt: DataTypes.STRING
  } 
  // {
  //   hooks:{
  //     // beforeCreate(user){
      //   var salt = bcrypt.genSaltSync(10)
      //   user.salt = salt
      //   user.password = bcrypt.hashSync(user.password, salt)
  //     // },
  //     beforeSave(user){
  //       var salt = bcrypt.genSaltSync(10)
  //       user.salt = salt
  //       user.password = bcrypt.hashSync(user.password, salt)
  //     }
  //   }
  // }
);
  User.hook('beforeSave', (user) => {
        var salt = bcrypt.genSaltSync(10)
        user.salt = salt
        user.password = bcrypt.hashSync(user.password, salt)
  });
  return User;
};