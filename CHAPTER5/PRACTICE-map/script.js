// QS => Given an array of strings representing numbers, use the map method to convert each string to a number

let stringArray = ["2", "4", "120", "50"];
let convertNum = stringArray.map((str) => {
    return parseInt(str);
});

console.log(convertNum);

//CONVERT TO STRING

let numArray = [2, 4, 120, 50];
let convertstring = numArray.map((str) => {
    return str.toString();
});

console.log(convertstring);

//QS => Given an array of numbers, use the map method to calculate the square root of each number

let arr = [1, 2, 3, 4, 5];

let squareRoot = arr.map((nums) => {
    return nums ** 2;
})

console.log(squareRoot);