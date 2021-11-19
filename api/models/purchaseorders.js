'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PurchaseOrders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PurchaseOrders.belongsToMany(models.Products,{through: 'ProductsOrders', foreignKey:'orderId', otherKey:'productId'})
      PurchaseOrders.belongsTo(models.Users,{foreignKey:'userId'})
    }
  };
  PurchaseOrders.init({
    user: DataTypes.INTEGER,
    totalPrice: DataTypes.FLOAT,
    status: DataTypes.STRING,
    paymentType: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PurchaseOrders',
  });
  return PurchaseOrders;
};