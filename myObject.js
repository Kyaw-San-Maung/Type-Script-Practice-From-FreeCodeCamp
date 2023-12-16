"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Kyaw San Maung",
    email: "kyaw@gmail.com",
    isActive: true
};
function createUsers(_a) {
    var String = _a.name, boolean = _a.isPaid;
}
//Bad habit for doing object. it should show error, there is no strict
var newUser = { name: "Kyaw", isPaid: true, email: "kyaw@gmail.com" };
createUsers(newUser);
function createCourse() {
    return { name: "Reactjs", price: 499 };
}
function myFunction(pt) {
    console.log("The number of x is : " + pt.x);
    console.log("The number of y is : " + pt.y);
}
myFunction({ x: 100, y: 100 });
var myUser = {
    _id: "12345",
    name: "Kyaw San Maung",
    email: "Kyaw@gmail.com",
    isActive: false,
};
myUser.email = "San@gmail.com";
