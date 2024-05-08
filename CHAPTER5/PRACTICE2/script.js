//Qs Create an arrow function to perform the same task as the previous question

const countVow = (str) => {
    let count = 0;
    for(const char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
    }
    return count;
};

let Vowels = countVow("apnacolege");
console.log(Vowels);

