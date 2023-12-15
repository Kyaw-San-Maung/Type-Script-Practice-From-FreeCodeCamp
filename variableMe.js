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
// Function control more than one type number or string or boolean
// Case One
// function getValue(myValue: number):boolean {
//     if (myValue > 5) {
//         return true;
//     }
//     return "200 ok"
// }
// Map practise with array
var Heros = ["SpiderMan", "Iron Man", "Thor", "Hulk"];
// const Heros = [1, 2, 3, 4];
Heros.map(function (hero) {
    return "I am ".concat(hero, ".");
});
