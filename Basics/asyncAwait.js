// Async and Await
function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Registration Done...");
      resolve("passed");
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
      //   return reject("Wrong password");
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
      console.log("User Data Displayed");
      resolve();
    }, 500);
  });
}

// call back function with DOT THEN
// register()
//   .then(emailSend)
//   .then(login)
//   .then(getUserData)
//   .then(displayData)
//   .catch((err) => {
//     console.log("error: ", err);
//   });

// Callback Function with Async and Await
// async function authenticate() {
//   await register();
//   await emailSend();
//await login(); //.catch((err) => {
//console.log(err);
//});
//   await getUserData();
//   await displayData();
// }

// Async Await
// async function authenticate() {
//   try {
//     await register();
//     await emailSend();
//     await login();
//     await getUserData();
//     await displayData();
//   } catch (err) {
//     console.log(err);
//     throw new Error();
//   }
// }

// Passing a value to resolve and accessing that value when calling that function using async await
async function authenticate() {
  try {
    const message = await register();
    await emailSend();
    await login();
    await getUserData();
    await displayData();
    console.log(message);
  } catch (err) {
    console.log(err);
    throw new Error();
  }
}
// Here we are passing new fnction inside authenticate function using .then
authenticate()
  .then(() => {
    console.log("All Done");
  })
  .catch((err) => {
    console.log(err);
  });
console.log("Application Loaded");
