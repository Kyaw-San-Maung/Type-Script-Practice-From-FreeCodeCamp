let greeting: string = "Hello World";

console.log(greeting);

// number

let userId = 3222.2;

userId.toFixed();

// boolean

let isLogin = true;

//any

let login:any;

function getHero() {
    return "Thor"
}

login = getHero();

function userLogin(name:String, email:String, password:number, isPaid:boolean) {
    
}

userLogin("Kyaw San Maung","Kyaw@gmail.com",3325, false)


// Function control in TypeScript

const addTwoNumber = (num1: number):number => {
    return num1 + 2;
}

let myValue = addTwoNumber(8)

export {}
