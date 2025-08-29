// Variables & Conditionals

let username = "Ian";
let age = 21;

if (age >= 18) {
  console.log(username + " is an adult.");
} else {
  console.log(username + " is a minor.");
}

// Function 1: Greet the user
function greetUser(name) {
  return "Hello, " + name + "! Welcome to the site.";
}

// Function 2: Check even or odd
function isEven(number) {
  if (number % 2 === 0) {
    return number + " is Even ✅";
  } else {
    return number + " is Odd ❌";
  }
}


// Loops

// For loop to display fruits
let fruits = ["Apple", "Banana", "Mango"];
for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit:", fruits[i]);
}

// While loop to count down
let count = 3;
while (count > 0) {
  console.log("Countdown:", count);
  count--;
}

// DOM Interactions

// DOM Interaction #1: Greeting button
document.getElementById("greetBtn").addEventListener("click", function() {
  document.getElementById("greetMsg").textContent = greetUser(username);
});

// DOM Interaction #2: Check number (even/odd)
document.getElementById("checkBtn").addEventListener("click", function() {
  let num = parseInt(document.getElementById("numInput").value);
  document.getElementById("checkResult").textContent = isEven(num);
});

// DOM Interaction #3: Add fruit to list
document.getElementById("addFruitBtn").addEventListener("click", function() {
  let fruitList = document.getElementById("fruitList");
  let newFruit = document.createElement("li");
  newFruit.textContent = "Orange"; // Could also take from user input
  fruitList.appendChild(newFruit);
});
