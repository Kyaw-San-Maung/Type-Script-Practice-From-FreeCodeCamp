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


// Function control more than one type number or string or boolean
// Case One
// function getValue(myValue: number):boolean {
//     if (myValue > 5) {
//         return true;
//     }
//     return "200 ok"
// }

// Map practise with array

const Heros = ["SpiderMan", "Iron Man", "Thor", "Hulk"];
// const Heros = [1, 2, 3, 4];
Heros.map((hero):string => {
    return `I am ${hero}.`
})

//Good practice for the function not return typ "void" by using tsc

function consoleError(errorMessage:string):void {
    console.log(errorMessage);
    
}

//Handling Error function never return value "never"
function handleError(msg:string):never {
    throw new Error(msg)
    
}
    export {}
