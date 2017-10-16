'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      username: "terrathe2",
      password: "9611c2c593f8b1e394f62246e02cee7d", // password terrathe2
      secret: "HUjs5x",
      role: "admin",
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
