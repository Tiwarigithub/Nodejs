const chalk = require("chalk");

const validator = require("validator");

console.log(chalk.blue.underline.inverse("Hello world!"));

const res = validator.isEmail("Anuj@123.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));