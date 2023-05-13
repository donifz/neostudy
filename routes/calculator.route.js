const express = require("express");
const router = express.Router();
const calculatorController = require("../controllers/calculator.controller");

router.get("/add/:num1/:num2", calculatorController.add);
router.get("/substract/:num1/:num2", calculatorController.subtract);
router.get("/multiply/:num1/:num2", calculatorController.multiply);
router.get("/divide/:num1/:num2", calculatorController.divide);

module.exports = router;
