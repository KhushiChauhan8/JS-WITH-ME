//QS => Write a function that takes an array of numbers and returns a new array containing only the even numbers using the filter method.

// let arr = [2, 5, 7, 6, 11, 13, 12];

// let evenNumbers = arr.filter((val) => {
//     return val % 2 === 0;
// });

// console.log(evenNumbers);

//Qs => Create a function that filters an array of strings and returns only the strings 

function filterStringsByLength(array, minLength) {
    return array.filter(function(string) {
        return string.length > minLength;
    });
}

// Example usage:
const words = ['apple', 'banana', 'pear', 'kiwi', 'orange'];
const minLength = 5;
const filteredWords = filterStringsByLength(words, minLength);
console.log(filteredWords); // Output: ['banana', 'orange']

