'use strict';



module.exports = {
  up:  (queryInterface, Sequelize) => {

    let data = [
      {
        name: "Mangga",
        stock: 3,
        price: 10000, 
        urlPhoto: "https://asset.kompas.com/crops/Te2vdWPykq7hj569MTuKqZpCGyE=/66x43:1000x666/780x390/data/photo/2020/07/28/5f1f9a2d13043.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Rambutan",
        stock: 5,
        price: 10000, 
        urlPhoto: "https://cdn1-production-images-kly.akamaized.net/PgcUcfjez9mtQohatMUb2ipzOq8=/640x480/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3048090/original/007351800_1581485367-rambutan-2477584_960_720.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Nangka",
        stock: 4,
        price: 10000, 
        urlPhoto: "https://asset.kompas.com/crops/bUJNIAuRfNkL_zscw6OPXUBhUws=/0x81:1000x748/750x500/data/photo/2019/04/15/1135437480.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]

    return queryInterface.bulkInsert('Items', data);
  },

  down:  (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Items', null, {})
  }
};
