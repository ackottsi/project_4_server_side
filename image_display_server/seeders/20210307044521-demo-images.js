'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Images', [
      {
        title: 'pic 1',
        date: '2015-08-07 05:00:01',
        comments: "first picture",
        url:"https://imagebucketgaackproject.s3.us-east-2.amazonaws.com/Imagefolder/IMG_20200906_174929.jpg",
        userId:1
    },
    {
        title: 'pic 2',
        date: '2000-08-07 05:00:01',
        comments: "second picture",
        url:"https://imagebucketgaackproject.s3.us-east-2.amazonaws.com/Imagefolder/IMG_20201011_153957.jpg",
        userId:2  
    },
    {
    title: 'pic 3',
    date: '2014-08-07 05:00:01',
    comments:"Third picture",
    url:"https://imagebucketgaackproject.s3.us-east-2.amazonaws.com/Imagefolder/IMG_20201105_142424.jpg",
    userId:3
    },
    {
      title: 'sunset',
      date: '2014-08-07 05:00:01',
      comments:"4th picture",
      url:"https://imagebucketgaackproject.s3.us-east-2.amazonaws.com/Imagefolder/IMG_20201105_164029.jpg",
      userId:1
      },
      {
        title: 'tractor',
        date: '2014-08-07 05:00:01',
        comments:"4th picture",
        url:"https://imagebucketgaackproject.s3.us-east-2.amazonaws.com/Imagefolder/IMG_20190421_121242.jpg",
        userId:1
        }
      
  ],{});
},

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Images', null, {});
     
  }
};
