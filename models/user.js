'use strict';
const genSalt=require('../helper/saltGen');
const createHash=require('../helper/hash');
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    salt: DataTypes.STRING
  },{
      // beforeCreate:(user)=>{
      //   let salt=genSalt();
      //   user.salt=salt;
      //   user.password=createHash(user.password,salt);
      // },
      // beforeBulkUpdate:(user)=>{
      //   console.log('tessss',user.attributes);
      //   let salt=genSalt();
      //   user.salt=salt;
      //   user.attributes.password=createHash(user.attributes.password,salt);
      //   console.log('new password',user.password);
      // }
  });
  // User.hook('beforeSave', (user, options) => {
  //   // console.log('teesss');
  //   let salt=genSalt();
  //   user.salt=salt;
  //   user.password=createHash(user.password,salt);
  //   // console.log(user.password);
  // });

  return User;
};
