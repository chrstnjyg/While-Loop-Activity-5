function guessNumber(){
    let correctNumber = Math.floor(Math.random() * 10) + 1; 
    let userGuess;
    while (userGuess !== correctNumber) {
        userGuess = parseInt(prompt("Guess a number between 1-10:"));
      
        if (userGuess < correctNumber) {
            alert("Too low!");
        } else if (userGuess > correctNumber) {
            alert("Too high!");
        } else if (userGuess === correctNumber) {
            alert("Correct number!");
        } else {
            alert("Please enter a valid number.");
        }    
    }
}