'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) =>{
     return Promise.all([
        queryInterface.addColumn('Products', 'weight', {
          type: Sequelize.FLOAT,
          after: "quantity"
        }, {transaction:t}),
        queryInterface.addColumn('Products', 'lenght', {
          type: Sequelize.FLOAT,
          after: "weight"
        }, {transaction:t}),
        queryInterface.addColumn('Products', 'width', {
          type: Sequelize.FLOAT,
          after: "lenght"
        }, {transaction:t}),
        queryInterface.addColumn('Products', 'height', {
          type: Sequelize.FLOAT,
          after: "width"
        }, {transaction:t})
      ]) 
    })
  },

  down: async (queryInterface, Sequelize) => {
    //await queryInterface.dropTable('users');
    return queryInterface.sequelize.transaction((t)=>{
      return Promise.all([
        queryInterface.removeColumn('Products', 'weight', {transaction:t}),
        queryInterface.removeColumn('Products', 'lenght', {transaction:t}),
        queryInterface.removeColumn('Products', 'width', {transaction:t}),
        queryInterface.removeColumn('Products', 'height', {transaction:t})
      ])
    })
  }
};
