'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: {
    	type: DataTypes.STRING,
      allowNull: false,
    	unique: {
    		args: true,
    		msg: 'Validation Error: Username is already used'
    	},
      validate: {
        notEmpty: {
          args: true,
          msg: 'Validation Error: Username can not be empty'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Validation Error: Password can not be empty'
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: {
          args: [['admin', 'user']],
          msg: 'Validation Error: Role not available. Choose between \'admin\' or \'user\''
        }
      }
    }
  });

  User.beforeSave((user, options) => {
    return bcrypt.hash(user.password, 8)
    .then(hashedPassword => {
      user.password = hashedPassword;
    })
    .catch(err => {
      res.send(err);
    })
  });

  return User;
};