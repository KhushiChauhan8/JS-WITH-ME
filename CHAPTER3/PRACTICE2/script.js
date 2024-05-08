let gameNum = 25;
let userNum = prompt("Guess the game number :");
while(userNum != gameNum){
    userNum = prompt("you entered wrong number. Guess again :")
}

console.log("Congratulations, you entered the right number ");