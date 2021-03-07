'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Images', [
      {
        title: 'pic 1',
        date: '2015-08-07 05:00:01',
        comments: "first picture",
        url:"/Users/ak64719/Desktop/Photos/IMG_20201105_142537.jpg"
    },
    {
        title: 'pic 2',
        date: '2000-08-07 05:00:01',
        comments: "second picture",
        url:"/Users/ak64719/Desktop/Photos/IMG_20201105_164010.jpg"  
    },
    {
    title: 'pic 3',
    date: '2014-08-07 05:00:01',
    comments:"Third picture",
    url:"/Users/ak64719/Desktop/Photos/IMG_20201108_225340.jpg"
    }
  ],{});
},

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Images', null, {});
     
  }
};
