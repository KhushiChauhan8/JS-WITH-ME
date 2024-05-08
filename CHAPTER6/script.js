////DOM MANIPULATION
//SELECTING WITH ID
//1. document.getElementById("myId");

// let heading = document.getElementById("heading"); //h1
// console.dir(heading);
// console.log(heading);

//2. document.getElementsByClassName("myClass");
// let heading = document.getElementsByClassName("heading-class");
// console.dir(heading);
// console.log(heading);

//3. document.getElementsByTagName("p");

// let heading = document.getElementsByTagName("p"); 
// console.dir(heading);
// console.log(heading);

//QUERYSELECTOR

//1. document.querySelector("myId / myClass / tag") //Return first element

//2. document.querySelectorAll("myId / myClass / tag") //Return a NodeList

// let firstEl = document.querySelector("p"); //1st element
// console.dir(firstEl);

// let allEl = document.querySelectorAll("p"); //all element
// console.dir(allEl);

// let firstEl = document.querySelector(".myClass"); //1st element
// console.dir(firstEl);

// let allEl = document.querySelectorAll(".myClass"); //all element
// console.dir(allEl);

let firstEl = document.querySelector("#myId");  //1st element
console.dir(firstEl);

let secondEl = document.querySelector("div");
