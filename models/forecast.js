'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Forecast extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Forecast.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    date: DataTypes.DATE,
    RTS: DataTypes.FLOAT,
    upper: DataTypes.FLOAT,
    forecast: DataTypes.FLOAT,
    actual_forecast: DataTypes.FLOAT,
    actual_upper: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Forecast',
  });
  return Forecast;
};