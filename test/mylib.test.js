//mylib.test.js

const {expect} = require('chai');
const { describe, before, after, it } = require('node:test');
const mylib = require('../mylib');

describe("mylib tests", function(){

    //Testin alussa...
    before(function(){
        console.log("Starting mylib tests...");
    });

    //Testin jälkeen...
    after(function(){
        console.log("Finished mylib tests.");
    });

    describe("add function", function(){
        it("should return the sum of two numbers", function(){
            expect(mylib.add(2, 3)).to.equal(5);
        });
    });
    describe("subtract function", function(){
        it("should return the difference of two numbers", function(){
            expect(mylib.subtract(5, 3)).to.equal(2);
        });
    });

    describe("multiply function", function(){
        it("should return the product of two numbers", function(){
            expect(mylib.multiply(4, 3)).to.equal(12);
        });
    });

    describe("divide function", function(){
        it("should return the quotient of two numbers", function(){
            expect(mylib.divide(6, 2)).to.equal(3);
        });
        it("should throw an error when dividing by zero", function(){
            expect(() => mylib.divide(5, 0)).to.throw("Division by zero is not allowed.");
        });
    });

});