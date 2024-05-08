// // function Definition

// function myFunction(){
//     console.log("Welcome to apna college");
//     console.log("We are leraning JS");
// }

// //function call
// myFunction();

// function myFunction(msg){
//     //Parameters -> input
//     console.log(msg);
// }

// myFunction("I love JS"); //Arguement

//Function -> 2  numbers, sum;

// function sum(x, y){
//     // x = 2;
//     // y = 3;
//     console.log(x + y);
// }
// sum(2, 3);

//Function -> 2  numbers, sum, with return Statement;

// function sum(x, y){
//     s = x + y;
//     return s;
// }

// let val = sum(2, 4);
// console.log(val);

//Arrow function
//Modern JS
// Sum function
// const arrowSum = (a, b) => {
//     console.log(a + b);
// };
// arrowSum(2, 5);

//Multiplication function
// const arrowMul = (a, b) => {
//     console.log(a * b);
//     // return a * b;
// };
// arrowMul(3, 4);
// let res = arrowMul(3, 4);
// console.log(res);

// const printHello = () => {
//     console.log("hello");
// };

// printHello();

//FOR - EACH METHOD 

// let arr = ["pune", "delhi", "mumbai"];

// arr.forEach((val, idx, arr) => { //(index, Value, ArrayItself)
//     console.log(val.toUpperCase(), idx, arr);
// });

//MAP METHOD

// let nums = [45, 7, 3, 9 ];

// let newarray = nums.map((val) => {
//     // console.log(val);
//     return val;
// });

// console.log(newarray);

//FILTER METHOD

// let arr = [2, 5, 8, 7, 6, 1, 4, 9];

// let evenArr = arr.filter((val) => {
//     return val % 2 === 0;
// });

// console.log(evenArr);

//REDUCE METHOD

// let arr = [1, 2, 3, 4];
// const output = arr.reduce((previous, current) => {
//     return previous + current;
// });

// console.log(output); //10;

//LARGESTV ELEMENT FOUND WITH REDUCE METHOD
let arr = [1, 3, 6, 8, 3, 6];

const output = arr.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
});

console.log(output);