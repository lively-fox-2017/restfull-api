'use strict';
const getHash = require('../helpers/cryptoHelper');
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
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'email format is incorrect'
        },
        isUnique: (value, next) => {
          User.find({
            where: {
              email: value,
              id: {
                [sequelize.Op.not]: this.id
              }
            }
          }).then(function(data) {
            if (data) {
              return next('Email Already Used')
            }
            return next();
          }).catch(function(err) {
            console.log(err);
          })
        }
      }
    },
    role: DataTypes.STRING
  })
  User.beforeCreate((user) => {
    var hash = getHash(user.password)
    user.password = hash;
  })
  User.beforeUpdate((user) => {
    var hash = getHash(user.password)
    user.password = hash;
  })
  return User;
};
