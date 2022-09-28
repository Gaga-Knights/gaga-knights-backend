'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Knights extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Knights.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    hp: DataTypes.INTEGER,
    strength: DataTypes.INTEGER,
    dexterity: DataTypes.INTEGER,
    intelligence: DataTypes.INTEGER,
    movement: DataTypes.INTEGER,
    gold: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Knights',
  });
  return Knights;
};