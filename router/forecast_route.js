const router = require('express').Router();
const authController = require('../controller/forecast_controller')


router.post('/forecast', authController.create) // {url}/user/registe
router.get('/forecast', authController.index) // {url}/user/register
router.get('/forecast/today', authController.get_one) // {url}/user/register


module.exports= router