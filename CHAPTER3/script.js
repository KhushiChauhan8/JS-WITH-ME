//FOR LOOP

// for(let count = 1; count <= 5; count++){
//     console.log("apna college");
// }

// Program of Sum
// let sum = 0;
// let n = 100;
// for(let i = 0; i <= n; i++){
//     sum = sum + i;
// }
// console.log("sum is ", sum);
// console.log("loop was ended")

// //WHILE LOOP

// let i = 1;
// while(i <= 5){
//     console.log("apna college");
//     i++;
// }

// DO WHILE LOOP

// let i = 1;
// do{
//     console.log("i =", i);
//     i++;
// }
// while(i <= 5);

// FOR-OF LOOP

// let str = "Javascript";

// let size = 0;
// for(let val of str){
//     console.log("val =", val)
//     size++;
// }
// console.log("string size =", size);

// FOR-IN LOOP

// let student = {
//     name: "xyz",
//     age: 20,
//     cgpa: 7.5,
//     isPass: true,
// };

// for(let key in student){
//     console.log("key =", key, "value=", student[key] );
// }

//strings

// let str = "ApnaCollege";
// // let str2 = "Shradha";
// console.log(str[1]); //p

//Template Literals

// let specialString = `this is a Template Literals ${2 + 1 + 3}`;
// console.log(specialString);

// //Why need to use backTicks

// let obj = {
//    item: "pen",
//    price: 10,
// }

// let output = `the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);

// console.log("the cost of", obj.item, "is", obj.price, "rupees");

//Escape Character

// console.log("Apna \n College");
// console.log("Apna \t College");
// let str = "Apna\tCollege";
// console.log(str.length);

// // toUpperCase()
// let str = "ApnaCollege";
// str = str.toUpperCase();
// console.log(str)

// // toLowercase
// let str = "APNACOLLEGE";
// str = str.toLowerCase();
// console.log(str)

// str.trim()

// let str = "     Apna  College  JS      ";
// console.log(str.trim());

//str.slice(start, end?) // end is not included;

// let str = "01234567"
// console.log(str.slice(2,6))

// //str1.concat(str2)
// let str1 = "Apna";
// let str2 = "College";
// let res = str1.concat(str2); 
// // let res = str1 + str2;
// console.log(res);

//str.replace(searchVal, newVal)

// let str = "hello";
// console.log(str.replace("h", "y"));

//str.replaceAll(searchVal, newVal)
// let str = "hellolololo"
// console.log(str.replaceAll("lo", "y"));

let str = "ILoveJS"
console.log(str.charAt(3)); //v