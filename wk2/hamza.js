// a
let userInput1 = parseInt(prompt("Enter first number"));
// b
let userInput2 = parseInt(prompt("Enter second number"));
// c
document.write(`<p>Hamza: The numbers are ${userInput1} and ${userInput2}</p>`);

// d
if (userInput1 < userInput2) {

    document.write(`<p>Hamza: The second number ${userInput2} is greater than the first one</p> `);
} else if (userInput1 > userInput2) {

    document.write(`<p>Hamza: The second number ${userInput2} is less than the first one</p> `);
} else if (userInput1 == userInput2) {

    document.write(`<p>Hamza: The second number ${userInput2} is equal to the first one </p>`);
} else {

    document.write(`<p>No valid input</p> `);
}

// e
let userInput3 = parseInt(prompt("Enter third number"));

// f

var gretestNumber = "";

if (userInput1 < userInput2 && userInput2 < userInput3) {
    document.write(`<p>Hamza: ${userInput1} ${userInput2} ${userInput3}</p>`);
    gretestNumber = userInput3;

} else if (userInput1 < userInput2 && userInput3 < userInput2) {
    document.write(`<p>Hamza: ${userInput1} ${userInput3} ${userInput2}</p>`);
    gretestNumber = userInput2;

} else if (userInput2 < userInput1 && userInput1 < userInput3) {
    document.write(`<p>Hamza: ${userInput2} ${userInput1} ${userInput3}</p>`);
    gretestNumber = userInput3;

} else if (userInput2 < userInput1 && userInput3 < userInput1) {
    document.write(`<p>Hamza: ${userInput2} ${userInput3} ${userInput1}</p>`);
    gretestNumber = userInput1;

} else if (userInput3 < userInput1 && userInput1 < userInput2) {
    document.write(`<p>Hamza: ${userInput3} ${userInput1} ${userInput2}</p>`);
    gretestNumber = userInput2;

} else {
    document.write(`<p>Hamza: ${userInput3} ${userInput2} ${userInput1}</p>`);
    gretestNumber = userInput1;
}

// g

let a = gretestNumber * 80 / 100;
let b = gretestNumber * 85 / 100;
let c = gretestNumber * 90 / 100;

if (gretestNumber > 100) {
    document.write(`<p>Hamza: ${gretestNumber}-(${gretestNumber}*.20) = ${a}</p>`);

} else if (gretestNumber > 50) {

    document.write(`<p>Hamza: ${gretestNumber}-(${gretestNumber}*.15 ) = ${b}</p>`);
} else if (gretestNumber > 20) {

    document.write(`<p>Hamza: ${gretestNumber}-(${gretestNumber}*.10) = ${c}</p>`);
} else {
    document.write(`<p>Hamza: Enter a value grader than <strong>20</strong> to calculate discount</p> `);
}

// h

let evenNum = userInput3 % 2;
if (evenNum == 0) {
    document.write(`<p>Hamza: The number is even</p>`);
} else {
    document.write(`<p>Hamza: The number is odd</p>`);
}
2