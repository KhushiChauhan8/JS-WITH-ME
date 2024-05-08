// //getAttributeBYId

// let div = document.querySelector("div");
// console.log(div);
// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// //getAttributeBYCLASS

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

// let box = document.querySelector("div");
// console.log(box.setAttribute("id", "newId"));


// let para = document.querySelector("p");
// console.log(para.setAttribute("class","newClass"));

//Access style by CSS

// let div = document.querySelector("div");
//And go to console window And simple type div.style then the whole style of div in Css there are showing

// div.style.backgroundColor = "purple";
// div.style.fontSize = "30px";
// div.innerText = "Hello";

// div.style.visibility = "hidden";

//insert elements in dom manipulation

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click me!";
// console.log(newBtn);

// let div = document.querySelector("div");
// // div.append(newBtn); 
// div.prepend(newBtn);
// div.before(newBtn);
// div.after(newBtn);

// let p = document.querySelector("p");
// p.after(newBtn);

let newheading = document.createElement("h1");
newheading.innerHTML = "<i>new Heading</i>";

let body = document.querySelector("body");
body.prepend(newheading);

//remove Elements

let para = document.querySelector("p");
para.remove();

newheading.remove();