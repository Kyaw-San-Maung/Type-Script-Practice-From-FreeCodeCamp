const User = {
    name: "Kyaw San Maung",
    email: "kyaw@gmail.com",
    isActive: true
}

function createUsers({name: String, isPaid: boolean}) {
    
}

//Bad habit for doing object. it should show error, there is no strict
let newUser = { name: "Kyaw", isPaid: true, email: "kyaw@gmail.com" };

createUsers(newUser)

function createCourse(): {name: String, price: number}{
    return {name: "Reactjs", price:499}
}

//Type aliases
//What if we having thousand of argument

type point = {
    x: number;
    y: number;
}

function myFunction(pt: point) {
    console.log("The number of x is : " + pt.x);
    console.log("The number of y is : " + pt.y);
}

myFunction({x:100, y:100})

//ReadOnly and Optional

type User = {
    readonly _id: string;  //readonly means that the user cannot chg the id
    name: String;
    email: string;
    isActive: boolean;
    creditCard?: number; // optional sign "?" user can put the value or not its okay
}

let myUser: User = {
    _id: "12345",
    name: "Kyaw San Maung",
    email: "Kyaw@gmail.com",
    isActive: false,
}

myUser.email = "San@gmail.com"


type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate:string
}

type cardDetails = cardNumber & cardDate & { cvv: number }

export{}