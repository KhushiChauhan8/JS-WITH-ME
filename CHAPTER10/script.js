//PROTOTYPE IN JS

// const student = {
//     fullname: "Khushi Chauhan",
//     marks: 94.5,
//     printMarks: function() {
//         console.log("marks = ", this.marks); //student.marks
//     },
// };

const employee = {
    calcTax() {
        console.log("tax rate is 10%"); //it is a simple method to create an function in object rather then calctax1
    },

    // calctax1: function() {
    //     console.log("tax rate is 10%");
    // },
};

let karanArjun = {
    salary: 50000,
    calcTax () {
        console.log("tax rate is 20%");
    },
};

//let karanArjun2 = {
//     salary: 50000,
// };

// let karanArjun3 = {
//     salary: 50000,
// };

// let karanArjun4 = {
//     salary: 50000,
// };


karanArjun.__proto__ = employee;
// karanArjun2.__proto__ = employee;
// karanArjun3.__proto__ = employee;
// karanArjun4.__proto__ = employee;

//CLASSES IN JS

// class ToyotaCar {
//     constructor(brand, mileage){
//         console.log("Creating new object");
//         this.brand = brand;
//         this.mileage = mileage
//     }
//     start() {
//         console.log("start");
//     }
    
//     stop() {
//         console.log("stop");
//     }

//     // setBrand(brand){
//     //     this.brand = brand
//     // }
// };

// let fortuner = new ToyotaCar("fortuner", 10); //constructor
// console.log(fortuner);
// let lexus = new ToyotaCar("lexus", 12); //constructor
// console.log(lexus);

//INHERITENCE IN JS

// class parent{
//     hello(){
//         console.log("hello");
//     }
// }

// class child extends parent {}

// let obj = new child();

class person {

    constructor(name) {
        // console.log("enter parent constructor");
        this.species = "homo sapiens";
        this.name = name;
    }
    eat() {
        console.log("eat");
    }

    // sleep() {
    //     console.log("sleep");
    // }

    // work() {
    //     console.log("do nothing")
    // }
}

//SUPER KEYWORD

class Engineer extends person {
    constructor(name) {
        // console.log("enter child constructor");

        super(name); //to invoke parent class constructor

        // this.branch = branch;
        // console.log("exit child constructor");
    }

    work() {
        super.eat();
        console.log("solve problems, build something ");
    }
}

let engObj = new Engineer("Khushi");

//ERROR HANDLING

let a = 5;
let b = 10;
console.log("a = ", a);
console.log("b = ", b);
console.log("a + b = ", a +  b);
try{
    console.log("a + b = ", a +  c);  //error
} catch(err){
    console.log(err); //print error
}

console.log("a + b = ", a +  b);
console.log("a + b = ", a +  b);
console.log("a + b = ", a +  b);
console.log("a + b = ", a +  b);
console.log("a + b = ", a +  b);