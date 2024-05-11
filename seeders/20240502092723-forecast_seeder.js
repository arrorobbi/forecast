'use strict';
const { week } = require('../controller/forecast_controller');
const datadAdmin = require('../database/data.json')
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up (queryInterface, Sequelize) {
    const insert = datadAdmin.map((eachDatadAdmin) => {
      eachDatadAdmin.id = uuidv4();
      eachDatadAdmin.week = week(eachDatadAdmin.date)
      const DW = (eachDatadAdmin.forecast - 3000) / 4900
      eachDatadAdmin.manpower = DW.toFixed(2)
      eachDatadAdmin.createdAt = new Date();
      eachDatadAdmin.updatedAt = new Date();
      return eachDatadAdmin
    })
    await queryInterface.bulkInsert('Forecasts', insert)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Forecasts', null, { truncate: true, restartIdentity: true })
  }
};
