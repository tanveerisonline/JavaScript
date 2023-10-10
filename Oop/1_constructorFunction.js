// OOP is a paradigm or style of programming centered around objects rather than functions.

//Constructor Function
// constructor functions first letter is capital
// constructor functions are used to create objects in javascript
// constructor functions are used to create multiple objects
// constructor functions are used to create objects with same properties and methods
// constructor functions are used to create objects with different values

function BankAccount(customerName, balance) {
  this.customerName = customerName; // in oop we call this properties
  this.AccountNumber = Date.now();
  this.balance = balance;
}
const tanveerAccount = new BankAccount("Tanveer", 1000);
console.log(tanveerAccount);

console.log(tanveerAccount.customerName); // to access the properties of an object we use dot notation
