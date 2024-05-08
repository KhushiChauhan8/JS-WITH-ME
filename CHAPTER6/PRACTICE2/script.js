//QS => Create 3 divs with common class name - "box". Access them & add some unique text to each of them 

let divs = document.querySelectorAll(".box");
// console.log(divs);

let idx = 1;
for(div of divs){
    div.innerText = `new unique value ${idx}`;
    idx++;
}
// divs[0].innerText = "New uniqe value 1";
// divs[1].innerText = "New uniqe value 2";
// divs[2].innerText = "New uniqe value 3";
