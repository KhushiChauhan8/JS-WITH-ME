//QS => Create toggle button

let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light"; //dark

modeBtn.addEventListener("click", () =>  {
  if(currMode === "light"){
    currMode = "dark";
    // body.style.backgroundColor = "black";
    body.classList.add("dark");
    body.classList.remove("light");
  }
  else{
    currMode = "light";
    // body.style.backgroundColor = "white";
    body.classList.add("light")
    body.classList.remove("dark");
  }

  console.log(currMode);
})
