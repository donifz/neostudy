const CalculatorService = require("../services/calculator.service");

class CalculatorController {
    add(req, res) {
        const { num1, num2 } = req.params;
        try {
            const result = CalculatorService.add(num1, num2);
            res.json({ result });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    subtract(req, res) {
        const { num1, num2 } = req.params;
        try {
            const result = CalculatorService.subtract(num1, num2);
            res.json({ result });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    multiply(req, res) {
        const { num1, num2 } = req.params;
        try {
            const result = CalculatorService.multiply(num1, num2);
            res.json({ result });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    divide(req, res) {
        const { num1, num2 } = req.params;
        try {
            const result = CalculatorService.divide(num1, num2);
            res.json({ result });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}
module.exports = new CalculatorController();
