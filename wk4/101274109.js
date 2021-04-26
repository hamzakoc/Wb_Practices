var display = document.getElementById("hamza");

//a
let integers = [];

//b
do {
    let newArray = integers.push(Math.ceil(Math.random() * 10));


} while (integers.length < 50);
// console.log(integers);

//c
display.innerHTML = integers.join(' - ');

//d
integers.unshift("integer");
integers.push("up to 10");
var p = document.createElement("p");
p.innerHTML = integers;
display.appendChild(p);


//f

let number5, number7;

for (let i = 0; i < integers.length; i++) {
    if (integers[i] == 5) {
        integers[i] = "Hamza";


    } else if (integers[i] == 7) {
        integers[i] = "Koc";
    }
}

var p = document.createElement("p");
p.innerHTML = integers;
display.appendChild(p);


//g


integers.sort();
var myArray = [];
var countArray = [];
var newValue;

for (var i = 0; i < integers.length; i++) {
    if (integers[i] != newValue) {
        myArray.push(integers[i]);
        countArray.push(1);
    } else {
        countArray[countArray.length - 1]++;
    }
    newValue = integers[i];
}

// h
let foundedNumber = `Number 5 is found ${countArray[countArray.length - 4]} times 
and number 7 is found ${countArray[countArray.length - 3]} times in this array`;
var p = document.createElement("p");
p.innerHTML = foundedNumber;
display.appendChild(p);