//QS Create a function using the "function" Keyword that takes a String as an arguement & and returns the numbers of vowels in the string;
function countVowels(str){
    let count = 0;
    for(const char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
    }
    return count;
    // console.log(count);
};

let Vowels = countVowels("apnacolege");
console.log(Vowels);