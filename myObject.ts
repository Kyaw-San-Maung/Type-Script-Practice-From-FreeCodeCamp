const User = {
    name: "Kyaw San Maung",
    email: "kyaw@gmail.com",
    isActive: true
}

function createUser({name: String, isPaid: boolean}) {
    
}

//Bad habit for doing object. it should show error, there is no strict
let newUser = { name: "Kyaw", isPaid: true, email: "kyaw@gmail.com" };

createUser(newUser)

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
export{}