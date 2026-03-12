const regform= document.getElementById("start");
regform.addEventListener("submit",function(e){
  e.preventDefault();
  const name=document.getElementById("Username").value;
  const passkey=document.getElementById("Password").value;
  const confirmpasskey=document.getElementById("Confirmpassword").value;
if(!name||!passkey||!confirmpasskey){
  alert("Fill all filed");
  return;
}
if(passkey!==confirmpasskey){
  alert("passwords doesn't match");
  return;
}
localStorage.setItem("username",name);
localStorage.setItem("password",passkey);
alert(`Mr/Mrs ${name} Registered successfully`);
window.location.href = "login.html";
});