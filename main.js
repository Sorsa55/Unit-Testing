//main.js

const mylib = require('./mylib');

function main() {
    console.log("add", mylib.add(5, 3));
    console.log("subtract", mylib.subtract(5, 3));
    console.log("multiply", mylib.multiply(5, 3));
    console.log("divide", mylib.divide(5, 0));
}

main();