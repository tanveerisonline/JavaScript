// First 1st
// Function with parameters
function login(username, password) {}
login("john", "secret");

// Second 2nd
// Function with Return Keyword
function upperCase(str) {
  return str.toUpperCase();
}
const result = uppercase("javascript");
console.log(result);

// Third 3rd
// Function with Condition
function calculateArea(width, height) {
  height = height === undefined ? 1 : height;
  const area = width * height;
  return area;
}
const totalArea = calculateArea(2, 4);

// Forth 4th
// Function Scope
// This variable has global scope
const fileName = "xyz.pdf";
function download() {
  // This declared variable has block scope
  const fileName = "xyz.pdf";
  console.log(fileName);
}
download();

//Fifth 5th
// Function with Default Parameters
function abc(a = "a", b = "b") {
  return a, b;
}
console.log(abc());

// Sixth 6th
// Function Declaration
function abcd(x, y) {
  return x * y;
}
console.log(abcd(22, 20));

// Seventh 7th
// Function Expression
const count = function (one, two) {
  return one + two;
};
console.log(count(23 + 27));

// Eighth 8th
// CallBack Function
function formatText(text, formatCb) {
  return typeof formatCb === "function" ? formatCb(text) : text.toUpperCase();
}
const formatedText = formatText("Hi Everyone", function (text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
});
console.log(formatedText);

// Ninth 9th
// IIFE (Immediately Invoked Function Expression)

(function myAge(age = 10) {
  return age;
})();

// Tenth 10th
// Arrow Function
let work = (job) => {
  return job;
};
const myWork = work("developer");
console.log(myWork);
