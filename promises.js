// New Way of writing asynchronous function with Promises

// Promise and Reject with Asynchronous way.

function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Registration Done...");
      resolve();
    }, 3000);
  });
}

function emailSend() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Email Send");
      resolve();
    }, 2000);
  });
}

function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Logged In");
      resolve();
    }, 1000);
  });
}

function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data Collected");
      resolve();
    }, 800);
  });
}

function displayData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return reject("can't display user data");
      console.log("User Data Displayed");
      reject();
    }, 500);
  });
}

register()
  .then(emailSend)
  .then(login)
  .then(getUserData)
  .then(displayData)
  .catch((err) => {
    console.log("error: ", err);
  });
console.log("Application Loaded");
// Promise with Asynchronous old way
// Callback hell
// register(() => {
//   emailSend(() => {
//     login(() => {
//       getUserData(() => {
//         displayData();
//       });
//     });
//   });
// });
