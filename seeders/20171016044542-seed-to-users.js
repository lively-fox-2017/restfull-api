'use strict';
const encryptAES256CTR = require('../helpers/encryptAES256CTR');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [{
      username: 'sisinduku',
      password: encryptAES256CTR('123'),
      role: 'admin',
      fullname: 'saptanto sindu',
      email: 'saptanto.sindu@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      username: 'siapa',
      password: encryptAES256CTR('123'),
      role: 'admin',
      fullname: 'siapa aja',
      email: 'siapa@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
