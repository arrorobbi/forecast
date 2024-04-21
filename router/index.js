const express = require("express");
const router = express.Router();
const forecastRoute = require('./forecast_route');

router.use(forecastRoute)

module.exports = router;