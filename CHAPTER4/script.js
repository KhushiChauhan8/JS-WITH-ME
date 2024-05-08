//Arrays
// let marks = [97,78,98,89,75,80];
// console.log(marks);
// console.log(marks.length); //property

// let heroes = ["ironman", "thor", "hulk", "shaktiman", "spideman"];

// console.log(heroes);
// console.log(heroes.length);

// let heroes = ["ironman", "thor", "hulk", "shaktiman", "spideman"];

// for(let i = 0; i < heroes.length; i++){
//    console.log(heroes[i]);
// }
 //for of
// let cities = ["UttarPradesh", "Delhi", "mumbai", "udaypur", "gurgaon"];

// for(let city of cities){
//     console.log(city.toUpperCase());
// }

// Array methods

//push()

// let foodItems = ["potato", "apple", "litchi", "tomato"];
// console.log(foodItems);
// foodItems.push("chips", "burger", "paneer");

// console.log(foodItems);

//pop

// let foodItems = ["potato", "apple", "litchi", "tomato"];

// console.log(foodItems);
// let deletedItems = foodItems.pop();

// console.log(foodItems);
// console.log("deleted items",deletedItems);

// .toString

// let foodItems = ["potato", "apple", "litchi", "tomato"];

// console.log(foodItems);

// console.log(foodItems.toString());

// console.log(foodItems);

// let marks = [10, 60, 30, 45, 67];
// console.log(marks);
// console.log(marks.toString());
// console.log(marks);

//concat()

// let marvelHeroes = ["thor", "spiderman", "ironman"];
// let dcHeroes = ["superman", "batman"];
// let indianHeroes = ["shaktiman", "krish"];

// let heroes = marvelHeroes.concat(dcHeroes, indianHeroes);

// console.log(heroes);

//Unshift()
// let marvelHeroes = ["thor", "spiderman", "ironman"];
// console.log(marvelHeroes);
// marvelHeroes.unshift("batman");

// console.log(marvelHeroes);

//shift()
// let marvelHeroes = ["thor", "spiderman", "ironman"];
// console.log(marvelHeroes);
// let val = marvelHeroes.shift();
// console.log("deleted val", val)
// console.log(marvelHeroes);
  
//slice()
// let marvelHeroes = ["thor", "spiderman", "ironman", "antman", "Dr. stranger"];

// console.log(marvelHeroes);
// console.log(marvelHeroes.slice(2,4));

//splice()

let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(2, 2, 101, 102);

//Add elements
// arr.splice(2, 0, 101);

//delete elements

// arr.splice(3, 1);

//replace elements
arr.splice(3, 1, 101);

