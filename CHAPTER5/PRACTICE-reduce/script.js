//QS => Given an array of numbers, use the reduce method to calculate the product of all elements in the array.
let arr = [1, 2, 3, 4, 5];
let findProduct = arr.reduce((prev, curr) =>{
    return prev * curr;
});

console.log(findProduct);

//QS => Given an array of numbers, use the reduce method to find the maximum value in the array.

let num = [12, 23, 45, 67, 13, 27];
let maxNum = num.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
});

console.log(maxNum);
