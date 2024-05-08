// //SYNCHRONOUS PROGRAMMING
// console.log("one");
// console.log("two");
// console.log("three");
// console.log("four");


// //ASYNCHRONOUS PROGRAMMING

// // function hello() {
// //    console.log("hello!");
// // }

// // setTimeout(hello, 4000); //timeout 2s = 2000ms;

// console.log("one");
// console.log("two");

// setTimeout(() => {
//     console.log("hello!");
// }, 4000);

// console.log("three");
// console.log("four");

//CALLBACK

// function sum(a, b){
//    console.log(a + b);
// }

// function calculator(a, b, sumCallback){
//     sumCallback(a, b);
// }

// calculator(1, 2, sum) 

// 

// CALLBACK HELL

// function getData(dataId, getNextData) {
//     //2s

//     setTimeout(() => {
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }

// getData(1, () => {
//     console.log("getting data2.....");
//     getData(2, () => {
//         console.log("getting data3.....");
//        getData(3, () => {
//         console.log("getting data4.....");
//         getData(4);
//        });
//     });
// });

//PROMISES

// let promise = new Promise((resolve, reject) => {
//     console.log("i am a promise");
//     // resolve("success");
//     reject("some error occurred");
// });

// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
       
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//             if(getNextData){
//                getNextData();
//             }
//         }, 10000);
//     });

// }

// .then() & .catch()
// const getpromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("i am a promise");
        
//         resolve("success");
//         // reject("network error");
//     });
// };

// let promise = getpromise();
// promise.then((res) => {
//     console.log("promise fulfilled", res);
// });

// promise.catch((err) => {
//     console.log("rejected", err);
// });


//Promise Chainning

// function asyncFunc1() {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success")
//         }, 4000);
//     });
// }

// function asyncFunc2() {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success")
//         }, 4000);
//     });
// }

// console.log("Fetching data1....");
// asyncFunc1().then((res) => {
//     console.log("Fetching data2....");
//     asyncFunc2().then((res) => {});

// });

//CALLBACK HELL  improve to PROMISE CHAIN

// function getData(dataId) {
   
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//         }, 2000);
//     });

    
// }

// //promise chain

// console.log("getting data1.....");
// getData(1)
// .then((res) => {
//     console.log("getting data2.....");
//     return getData(2);
// })
// .then((res) => {
//     console.log("getting data3.....");
//     return getData(3);
// })
// .then((res) => {
//     console.log(res);
// });

//Async-Await

// async function hello() {
//     console.log("hello");
// }

// hello();

// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Weather data");
//             resolve("200");
//         }, 2000);
//     });

// }

// async function getWeatherData(){
//     await api(); //1st 
//     await api(); //2nd
// };

//WITH Async-Await
function getData(dataId) {
   
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success")
        }, 2000);
    });

    
}

async function getAllData(){
    console.log("getting data1....");
    await getData(1);
    console.log("getting data2....");
    await getData(2);
    console.log("getting data3....");
    await getData(3);
    console.log("getting data4....");
    await getData(4);
    console.log("getting data5....");
    await getData(5);
    console.log("getting data6....");
    await getData(6);
};

//IIFE Function to improve unneccesary Call to automatically execute the code but only one time to create IIFE

(async function(){
    console.log("getting data1....");
    await getData(1);
    console.log("getting data2....");
    await getData(2);
    console.log("getting data3....");
    await getData(3);
    console.log("getting data4....");
    await getData(4);
    console.log("getting data5....");
    await getData(5);
    console.log("getting data6....");
    await getData(6);
})();

