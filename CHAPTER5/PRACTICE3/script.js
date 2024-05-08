//QS =>  For a given array of numbers, print the squarte of each value using the for each loop

// let nums = [2, 5, 7, 3, 5];

// nums.forEach((num) => {
//     console.log(num * num); //num**2 
// });

//SECOND METHOD
let nums = [2, 5, 7, 3, 5];

let calcSquare = ((num) => {
  console.log(num * num); //num**2 
});

nums.forEach(calcSquare);