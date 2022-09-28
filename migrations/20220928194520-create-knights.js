'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('knights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false
      },
      hp: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      strength: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      dexterity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      intelligence: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      movement: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      gold: {
        type: Sequelize.INTEGER,
        allowNull: false
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('knights');
  }
};