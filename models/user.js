'use strict';

const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  });

  User.hook('beforeSave', (user, options) => {

    const saltRounds = 8;
    let salt = bcrypt.genSaltSync(saltRounds);
    let hash = bcrypt.hashSync(user.password, salt);

    user.password = hash;

  });

  return User;
};
