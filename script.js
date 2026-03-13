// saved username and password
let savedUser = "admin";
let savedPass = "123";

// login function using Promise
function login(user, pass) {
  return new Promise((resolve, reject) => {

    if (user === savedUser && pass === savedPass) {
      resolve("Login Successful ✅");
    } else {
      reject("Invalid Username or Password ❌");
    }

  });
}

// form submit
document.getElementById("loginForm").addEventListener("submit", function(e) {

  e.preventDefault(); // stop page refresh

  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  login(user, pass)
    .then(function(result){
      document.getElementById("message").innerText = result;
    })
    .catch(function(error){
      document.getElementById("message").innerText = error;
    });

});