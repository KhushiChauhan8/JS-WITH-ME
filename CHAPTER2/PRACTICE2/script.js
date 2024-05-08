// let score = 89;
let score = prompt("Enter your score (0-100)");
let grade;

if(score >= 90 && score <= 100){
    // console.log( score,"grade A");
    grade = "A";
}

else if(score >= 70 && score <= 89){
    // console.log( score,"grade B");
    grade = "B";
}

else if(score >= 60 && score <= 69){
    // console.log( score,"grade C");
    grade = "C";
}
else if(score >= 50 && score <= 59){
    // console.log( score,"grade D");
    grade = "D";
}
else if(score>= 0 && score <= 49){
    // console.log(score,"grade f");
    grade = "F";
}
console.log("According to your score, your grade was :", grade);
