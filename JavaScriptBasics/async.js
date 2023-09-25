// Example of Synchronous Code

console.log("Hello"); // First Execution
console.log("first"); // Second Execution
// Above Code runs line by line which means its Synchronous Code.

// Example of Asynchronous Code

console.log("Hello"); // First Execution
setTimeout(function () {
  console.log("Hi i am from setTimeout"); // Third Execution
}, 3000);
console.log("first"); // Second Execution
// This code runs when call stack is free their is no other execution happening
// Example 2
console.log("first");

function CallBack() {
  console.log("I am a call back function");
}

setTimeout(CallBack, 6000);

console.log("i was last");
