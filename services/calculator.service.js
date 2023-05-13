const checkForNan = require("../utils/chekForNan");

class CalcultorSercvice {
    add(num1, num2) {
        if (checkForNan(num1, num2)) {
            throw new Error("Can not convert arguments to number");
        }
        return Number(num1) + Number(num2);
    }
    subtract(num1, num2) {
        if (checkForNan(num1, num2)) {
            throw new Error("Can not convert arguments to number");
        }
        return Number(num1) - Number(num2);
    }
    multiply(num1, num2) {
        if (checkForNan(num1, num2)) {
            throw new Error("Can not convert arguments to number");
        }
        return Number(num1) * Number(num2);
    }
    divide(num1, num2) {
        if (checkForNan(num1, num2)) {
            throw new Error("Can not convert arguments to number");
        }
        if (Number(num2) === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return Number(num1) / Number(num2);
    }
}

module.exports = new CalcultorSercvice();
