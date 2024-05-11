const router = require('express').Router();
const authController = require('../controller/forecast_controller')


router.post('/forecast', authController.create) 
router.get('/forecast', authController.index) 
router.get('/forecast/dashboard', authController.dashboard) 
router.get('/forecast/:week', authController.weekly) 
router.get('/forecast/today', authController.get_one) 


module.exports= router