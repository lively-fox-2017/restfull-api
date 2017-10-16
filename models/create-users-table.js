'use strict';
module.exports = (sequelize, DataTypes) => {
  var create - users - table = sequelize.define('create-users-table', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    fullname: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return create - users - table;
};