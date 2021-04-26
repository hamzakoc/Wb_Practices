var display = document.getElementById("result");
var button = document.getElementById("button");



let myArray = [];

while (myArray.length < 200) {

    myArray.push(Math.ceil(Math.random() * 50));
}


let sum = 0;

function myFunction(myArray, index) {
    myArray.forEach(element => {

        console.log(element);
        if (element % index == 0) {
            sum += element;
            return sum;

        }
    });

    display.innerHTML = sum;
    sum = 0;

}