'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: {
            type: DataTypes.STRING,
            validate: {
                        isUnique: function(value, next) {
                          User.find({
                              where: {
                                      username: value,
                                      id:{
                                          [sequelize.Op.not]: this.id
                                         }
                                     }
                          })
                          .then(function(match) {
                            if (match){
                              return next('Username already in use!');
                            } else {
                              return next();
                            }
                          })
                        }
                      }
           },
    password: DataTypes.STRING,
    secret: DataTypes.STRING,
    role: DataTypes.STRING
  });
  return User;
};
