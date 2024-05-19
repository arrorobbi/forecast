const router = require("express").Router();
const authController = require("../controller/forecast_controller");

router.post("/forecast", authController.create);
router.get("/forecast/:firstDay/:today", authController.index);
router.get("/forecast/dashboard", authController.dashboard);
router.get("/forecast/:id", authController.detail);
router.patch("/forecast/:id", authController.update);
router.get("/forecast/today", authController.get_one);

module.exports = router;
