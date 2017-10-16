'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: {
    	type: DataTypes.STRING,
    	unique: {
    		args: true,
    		msg: 'Validation Error: Username is already used'
    	}
    },
    password: DataTypes.STRING,
    role: {
      type: DataTypes.STRING,
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