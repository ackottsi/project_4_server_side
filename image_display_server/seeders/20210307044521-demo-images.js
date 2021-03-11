'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Images', [
      {
        title: 'pic 1',
        date: '2015-08-07 05:00:01',
        comments: "first picture",
        url:"http://localhost:3002/IMG_20201105_142537.jpg",
        userId:1
    },
    {
        title: 'pic 2',
        date: '2000-08-07 05:00:01',
        comments: "second picture",
        url:"http://localhost:3002/IMG_20201105_164010.jpg",
        userId:2  
    },
    {
    title: 'pic 3',
    date: '2014-08-07 05:00:01',
    comments:"Third picture",
    url:"http://localhost:3002/IMG_20201108_225340.jpg",
    userId:3
    }
  ],{});
},

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Images', null, {});
     
  }
};
