'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const cart = await queryInterface.bulkInsert('Carts', [{
      userId: 1,
      totalPrice: 109.94,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
    await queryInterface.bulkInsert('ProductsCarts',[{
      cartId: cart,
      productId: 1,
      quantity: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cartId: cart,
      productId: 3,
      quantity: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Carts', null, {});
  }
};
