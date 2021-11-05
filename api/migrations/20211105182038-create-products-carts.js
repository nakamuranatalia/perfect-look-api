'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ProductsCarts', {
      cartId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Carts', key:'id'}
      },
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Products', key:'id'}
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ProductsCarts');
  }
};