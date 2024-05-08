const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#facts");
const btn = document.querySelector("#btn");


const getFacts = async() => {
    console.log("getting data....");
    let response = await fetch(URL);
    console.log(response); //JSON format
    let data = await response.json();
   
    factPara.innerHTML = data[1].text
}

//PROMISE Chaining 
// function getFacts() {
//     fetch(URL)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         factPara.innerHTML = data[1].text;
//     });
// }

btn.addEventListener("click", getFacts);