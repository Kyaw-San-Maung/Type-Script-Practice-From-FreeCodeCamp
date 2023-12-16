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


export{}