'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Carts.belongsTo(models.Users, {foreignKey: 'userId'})
      Carts.belongsToMany(models.Products,{through: 'ProductsCarts', foreignKey:'cartId', otherKey:'productId'})
    }
  };
  Carts.init({
    userId: DataTypes.STRING,
    totalPrice: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Carts',
  });
  return Carts;
};