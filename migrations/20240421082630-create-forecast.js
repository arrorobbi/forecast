'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Forecasts', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      date: {
        type: Sequelize.DATE
      },
      week: {
        type: Sequelize.STRING
      },
      RTS: {
        type: Sequelize.FLOAT
      },
      upper: {
        type: Sequelize.FLOAT
      },
      forecast: {
        type: Sequelize.FLOAT
      },
      actual_forecast: {
        type: Sequelize.FLOAT
      },
      actual_upper: {
        type: Sequelize.FLOAT
      },
      manpower: {
        type: Sequelize.FLOAT
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
    await queryInterface.dropTable('Forecasts');
  }
};