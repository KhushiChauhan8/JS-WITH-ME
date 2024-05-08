// //Arithmetic Operator
// let a = 5;
// let b = 2;

// console.log("a =", a, "& b =", b);
// console.log("a + b = ", a + b);
// console.log("a - b = ", a - b);
// console.log("a * b = ", a * b);
// console.log("a / b = ", a / b);
// console.log("a % b = ", a % b);
// console.log("a ** b = ", a ** b); //Exponantiation Operator

//Unary Operator
// let a = 5;
// let b = 2;

// console.log("a =", a, "& b =", b);
// // a = a + 1;
// // a++;
// // console.log(a);
// console.log("a++ = ", a++); //5
// console.log(a); //6
// console.log("a-- = ", a--); //6 
// console.log(a); //5
// console.log("++a = ", ++a);//6
// console.log(a); //6
// console.log("--a = ", --a); //5
// console.log(a); //5

// Assignment Operators

// let a = 5;
// let b = 2;

// console.log("a =", a, "& b =", b);
// a += 4; //a = a + 4 => 9
// console.log(a);
// a -= 4; //a = 9 - 4 => 5
// console.log(a);
// a *= 4; //a = 5 * 4 => 20
// console.log(a);
// a /= 4; //a = 20 / 4 => 5
// console.log(a);
// a %= 4; //a = 5 % 4 => 1
// console.log(a);
// a **= 4; //a = 1 ** 4 => 1
// console.log(a);

// let a = 5; //number
// let b = 2;
// let c = "5" //string -> number
//  //console.log("a == c", a == c); //true
//  //console.log("a === c", a === c); //false
// //console.log("a !== b", a !== b); //false
// console.log("a == b", a == b); //false
// console.log("a != b", a != b); //true
// console.log("a >= b", a >= b); // true
// console.log("a <= b", a <= b); // false
// console.log("a < b", a < b); //false
// console.log("a > b", a > b); //true

//Logical Operators
// let a = 5; 
// let b = 2;

// let cond1 = a > b; //true
// let cond2 = a == 5; // true
// let cond3 = a < b;//false
// console.log("cond1 && cond2 =", cond1 && cond2); // true
// console.log("cond1 || cond3 =", cond1 || cond3);// true
// console.log("!(5>2) =", !(a > b)); //false

// Conditional Statements
//if statement
// let mode = "dark";
// let color;

// if(mode === "dark"){
//     color = "black";
// }
// if(mode === "light"){
//     color = "white";
// }

// console.log(color);

//if else condition

// let age = 23;

// if (age >= 18){
//     console.log("you can vote");
// }
// else{
//     console.log("not vote")
// }

//odd or even

// let num = 10;
// if (num%2 === 0){
//     console.log(num, " is even");
// }
// else{
//     console.log(num, " is odd")
// }

// if else if Condition

// let mode = "dark";
// let color;
// if(mode === "dark"){
//     color = "black";
// }
// else if(mode === "blue"){
//     color = "blue";
// }

// else if(mode === "pink"){
//     color = "pink";
// }
// else {
//     color = "white";
// }

// console.log(color);

// if(mode === "dark"){
//     console.log(mode);
// }

// ternary operstor

let age = 25;
let result = age >= 18 ? "adult" : "Not adult";
console.log(result); //simpler compact if-else 

alert("hello!");