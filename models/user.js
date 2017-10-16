'use strict';

const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Validation error: username is required'
        }
      },
      unique: {
        args: true,
        msg: "Validation error: username already exists"
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Validation error: password is required'
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Validation error: role is required'
        }
      }
    }
  });

  User.hook('beforeSave', (user, options) => {

    const saltRounds = 8;
    let salt = bcrypt.genSaltSync(saltRounds);
    let hash = bcrypt.hashSync(user.password, salt);

    user.password = hash;

  });

  return User;
};
