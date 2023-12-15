"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greeting = "Hello World";
console.log(greeting);
// number
var userId = 3222.2;
userId.toFixed();
// boolean
var isLogin = true;
//any
var login;
function getHero() {
    return "Thor";
}
login = getHero();
function userLogin(name, email, password, isPaid) {
}
userLogin("Kyaw San Maung", "Kyaw@gmail.com", 3325, false);
// Function control in TypeScript
var addTwoNumber = function (num1) {
    return num1 + 2;
};
var myValue = addTwoNumber(8);
