//let greetings = "Hi!"
//let numberA = 0
//let numberB = 2
//let myNumber = "1"

//let greetNumber = greetings + numberA

//let sum = numberA / numberB
//let sumB = numberB + myNumber

//console.log("greetings")
//console.log("numberA")
//console.log("greetings")
//console.log("greetNumber")

//console.log("sumB")

//let number = 0

//number += 1
//number += 2
//number += 3
//number += 4

//console.log ("number")


const BUTTON = document.getElementById("button");
const BOX = document.getElementById("result");
const INPUT = document.getElementById("userInput");

let number = 0;

BUTTON.addEventListener("click", ()  => {

   let userInput = INPUT.value;
   
   console.log(userInput);

   let boxInput = document.createElement("p");
   boxInput.tectContent = userInput;

   BOX.appendChild(userInput);
   
   

})

