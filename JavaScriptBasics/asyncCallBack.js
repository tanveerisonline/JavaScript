// Traditional Way of writing asynchronous function with callback

function register(callback) {
  setTimeout(() => {
    console.log("Registration Done...");
    callback();
  }, 3000);
}

function emailSend(callback) {
  setTimeout(() => {
    console.log("Welcome to your account");
    callback();
  }, 2000);
}

function login(callback) {
  setTimeout(() => {
    console.log("Logged Inn");
    callback();
  }, 1500);
}

function getUserData(callback) {
  setTimeout(() => {
    console.log("User data Collected");
    callback();
  }, 1000);
}

function displayData(callback) {
  setTimeout(() => {
    console.log("User Data Displayed");
    callback();
  }, 500);
}

// Callback hell
register(() => {
  console.log("first");
  emailSend(() => {
    console.log("second");
    login(() => {
      console.log("Third");
      getUserData(() => {
        console.log("forth");
        displayData(function () {
          console.log("fifth");
        });
      });
    });
  });
});

console.log("Application Loaded");
