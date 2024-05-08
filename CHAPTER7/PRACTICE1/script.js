/*Qs Create a new button. Give it a text "click me!", background color of red & taxt color of white.

Insert the button as the first element inside the body tag */

let newBtn = document.createElement("button");
newBtn.innerText = "Click me!";
console.log(newBtn); //Depending uppon us that We want to console or not

newBtn.style.backgroundColor = "red";
newBtn.style.color = "white"

let body = document.querySelector("body");
body.prepend(newBtn);
