'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Products.belongsToMany(models.Carts,{through: 'ProductsCarts', foreignKey:'productId', otherKey:'cartId'})
      Products.belongsToMany(models.PurchaseOrders,{through: 'ProductsOrders', foreignKey:'productId', otherKey:'orderId'})
    }
  };
  Products.init({
    name: DataTypes.STRING,
    brand: DataTypes.STRING,
    category: DataTypes.STRING,
    size: DataTypes.CHAR(2),
    material: DataTypes.STRING,
    color: DataTypes.STRING,
    price: DataTypes.FLOAT,
    quantity: DataTypes.INTEGER,
    weight: DataTypes.FLOAT,
    lenght: DataTypes.FLOAT,
    width: DataTypes.FLOAT,
    height: DataTypes.FLOAT,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};