const loginForm=document.getElementById("play");
loginForm.addEventListener("submit", function(e) {

  e.preventDefault(); // stops form reload
  let username = document.getElementById("loginUsername").value;
  let password = document.getElementById("loginPassword").value;

  let savedUser = localStorage.getItem("username");
  let savedPass = localStorage.getItem("password");

  if (username === savedUser && password === savedPass) {
    alert("Login successfully");
    window.location.href = "meles.html";
  } else {
    alert("Incorrect password or username,please Try again!")
    }
  });