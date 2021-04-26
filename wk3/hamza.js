let secretNumber = Math.floor(Math.random() * 10);
console.log(secretNumber);
const msg = document.getElementById("message");
let userInput;
let attempt = 0;
let output = "";

// userInput = Number(prompt("The number is between 0-10. Can you guess it? x to exit"));

do {
    userInput = Number(prompt("The number is between 0-10. Can you guess it? x to exit"));

    if (userInput === null || userInput === 'x') {
        break;
    }
    if (isNaN(userInput)) {
        userInput = parseInt(prompt("Please enter number"));
    } else {
        if (userInput < secretNumber) {
            alert("That was too low");
            attempt++;

        } else if (userInput > secretNumber) {
            alert("That was too high");
            attempt++;
        } else if (userInput == secretNumber) {
            attempt++;
            output = `Congratulations!! It took you ${attempt} attempts to guess the number`;
            break;

        } else {
            userInput = parseInt(prompt("That was too high"));
        }


    }
    output = `Unfortunately you reached max attempt ${attempt}`;

} while (attempt <= 5);
msg.innerHTML = output;

/*

let secretNumber = Math.floor(Math.random() * 10); // generates a random number between 0-10
const msg = document.getElementById("message");
let userInput;
let attempt = 1;
let output = "";
// user should be allowed a maximum of 5 attempts
// 1. prompt user to guess the number. Cancel will exit the program.
//    User can refresh browser to star over again.
// 2. if user did not enter a valid number, alert user and do not count that as an attempt
// 3. if user guessed the right number exit the loop and display message
// congratulations, it took you n number of attempt/s to guess that.
// 4. Enhance your code to alert user a hint message, i.e "That was too low", or
// if the number was higher, display alert message "That was too high".
// 5. Move your JavaScript into a separate file
// 6. upload both your files to public_html/comp1231/lab/practices/wk3
do {
  userInput = prompt("The number is between 0-10. Can you guess it? x to exit");
  // check if an invalid number was entered, skip this iteration

  if (userInput == secretNumber) {
    output = `Congratulations!! It took you ${attempt} attempts to guess the number`;
    //
  }
  attempt++;
} while (attempt <= 5 && userInput !== null);
msg.innerHTML = output;

*/