'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Users', [
      {
        cpf: "12345678910",
        name: "Natalia Nakamura",
        email: "natalia@email.com",
        address: "Rua Pitaya, 598",
        telephone: "1197541026",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cpf: "32165498702",
        name: "Natália Cristina Oliveira de Melo",
        email: "nataliaoliveira@email.com",
        address: "Rua Bananas, 78",
        telephone: "11975412036",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cpf: "52147896320",
        name: "Geovanna Holanda",
        email: "geovanna@email.com",
        address: "Rua Pererinha, 25",
        telephone: "11975420369",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cpf: "78430126977",
        name: "Laís Fortis",
        email: "lais@email.com",
        address: "Rua Laranjas, 32",
        telephone: "11975203641",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
