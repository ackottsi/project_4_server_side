'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Images', [
      {
        Title: 'pic 1',
        date: 3/6/2020,
        comments: "first picture",
        url:"/Users/ak64719/Desktop/Photos/IMG_20201105_142537.jpg"
    },
    {
        Title: 'pic 2',
        date: 3/6/1999,
        comments: "second picture",
        url:"/Users/ak64719/Desktop/Photos/IMG_20201105_164010.jpg"  
    },
    {
    Title: 'pic 3',
    date: 3/6/2222,
    comments: "/Users/ak64719/Desktop/Photos/IMG_20201108_225340.jpg",
    url:"url here"
    }
  ],{});
},

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Images', null, {});
     
  }
};
