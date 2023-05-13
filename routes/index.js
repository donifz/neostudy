const express = require("express");
const router = express.Router();
const calculatorRoute = require("./calculator.route");

router.use("/calculator", calculatorRoute);

module.exports = router;
