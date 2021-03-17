'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Jimmy',
        username: 'Jimmy_username',
        password: "JP",
    },
    {
      name: 'Dave',
      username: 'Dave_username',
      password: "qwerty",
    },
    {
      name: 'Ollie',
      username: 'stubborn_dog',
      password: "bark"
    }
  ],{});
},

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Images', null, {});
     
  }
};
