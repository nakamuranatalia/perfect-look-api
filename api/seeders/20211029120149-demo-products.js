'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Products', [
      { 
        name: "Blusa Básica Manga Curta",
        brand: "Marisa",
        category: "Feminino",
        size: "P",
        material: "Viscose",
        color: "Rosa",
        price: 29.99,
        quantity: "50",
        weight: 0.3,
        lenght: 25,
        width: 2,
        height: 15.5,
        description: "Blusa feminina modelo básica, confeccionada em tecido viscose. Possui decote redondo em ribana, manga curta, acabamento e costura no tom.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        name: "Calça Jeans Reta",
        brand: "Marisa",
        category: "Feminino",
        size: "52",
        material: "Jeans",
        color: "Azul",
        price: 79.95,
        quantity: "70",
        weight: 0.7,
        lenght: 26,
        width: 10,
        height: 27,
        description: "Calça plus size feminina modelo reta, confeccionada em tecido jeans. Possui cintura média, fechamento por botão e zíper no entremeio, cós com passantes, bolsos frontais falsos e funcionais na parte de trás, costura no tom e acabamento em tom contrastante.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        name: "Sunga Estampa Folhas D'uomo",
        brand: "Marisa",
        category: "Masculino",
        size: "M",
        material: "Poliéster e Elastano",
        color: "Verde",
        price: 59.95,
        quantity: "10",
        weight: 0.05,
        lenght: 17,
        width: 2,
        height: 12,
        description: "Sunga masculina modelo slip, confeccionada em tecido poliéster e elastano. Possui estampa folhas, cós elástico estampa da marca, forro, acabamento e costura no tom.",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
     
     await queryInterface.bulkDelete('Products', null, {});

  }
};
