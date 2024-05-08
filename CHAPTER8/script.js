let newbtn = document.querySelector("#newBtn");

// newBtn.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
//     // console.log("this is a newBtn");
//     // let a = 25;
//     // a++;
//     // console.log(a);
// };

// newbtn.addEventListener("click", (evt) => {
//     console.log("button1 was clicked");
//     console.log(evt);
//     console.log(evt.type);
// });

//ADD EVENTLISTENER

// newbtn.addEventListener("click", () => {
//     console.log("button1 was clicked - handler2");
  
// });

// let box = document.querySelector(".box");
// box.onmouseover = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
//     console.log("you are inside the div");
// };

//REMOVE EVENTLISTENER

newbtn.addEventListener("click", () => {
    console.log("button was clicked - handler1");
});

newbtn.addEventListener("click", () => {
    console.log("button was clicked - handler2");
});

const handler3 = () => {
    console.log("button was clicked - handler3");
};

newbtn.addEventListener("click", handler3);

newbtn.addEventListener("click", () => {
    console.log("button was clicked - handler4");
});

newbtn.removeEventListener("click", handler3);