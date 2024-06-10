"use strict";
const input = document.querySelector(".input");
const clearBtn = document.querySelector(".clear");
const keys = document.querySelectorAll(".bottom span");
let result;
let answer;
let operation = "";
let decimalAdded = false;

const operators = ["+", "-", "x", "÷"];
// functions
function clearInput() {
  operation = "";
  answer = "";
  input.innerHTML = operation;
  result= answer;
  let decimalAdded = false;
}

clearBtn.addEventListener("click", clearInput);
keys.forEach((key) => {
  key.addEventListener("click", handleKeyPress);
  key.addEventListener("click", evaluate);
});
