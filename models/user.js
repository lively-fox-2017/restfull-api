'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      validate: {
        isUnique: function(value, next) {
          User.findOne({
              where: {
                username: value,
                id: {
                  [sequelize.Op.not]: this.id,
                }
              }
            })
            .then((found) => {
              if (found) {
                return next('Username already been used.');
              }
              return next();
            })
            .catch(reason => {
              console.log(reason);
            });
        }
      }
    },
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    fullname: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: "Email is not valid."
        }
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};
