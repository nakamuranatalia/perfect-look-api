'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.hasOne(models.Carts,{foreignKey:'userId'})
    }
  };
  Users.init({
    cpf: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    telephone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};