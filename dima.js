let fini=document.getElementById("reo");
let arr = JSON.parse(localStorage.getItem("element")) || [];
fini.addEventListener("submit",function(e){
  e.preventDefault();
  let file=document.getElementById("nam").value;
  let prm=document.getElementById("prom").value;
  let sava=localStorage.getItem("User");
  let cd=localStorage.getItem("Promo");
  let total=localStorage.getItem("Total");
  if(file ==""|| prm==""){
    alert(`Fill all fileds.`);
  }
  let reservation = arr.find(r => r.name === file && r.promo == prm);

    if(!reservation){
        alert(`Incorrect name or promo.`);
    } else {
        alert(`Name: ${reservation.name}\nPrice:$${reservation.total}\nReserve room: ${reservation.promo}`);
    }
});
document.addEventListener("DOMContentLoaded",function(){
  const stars = document.querySelectorAll('.star-rating span');
  const ratingText = document.getElementById('rating-value');
  let rating = 0;
  stars.forEach(star => {
     star.addEventListener('click', () => {
     rating = star.getAttribute('data-value');
     ratingText.textContent = `Rating of: ${2*rating}/10`;
     updateStars(rating);
    });
  });
  function updateStars(rating) {
     stars.forEach(star => {
       star.classList.remove('filled');
       if(star.getAttribute('data-value') <= rating){
         star.classList.add('filled');
        }
    });
  }
});
document.addEventListener("DOMContentLoaded",function(e){
  e.preventDefault();
  const Cas = document.getElementById("sard");
  Cas.addEventListener("click",function(){
    if (Cas){
    cas.textContent="Thank you Our dear customer.";
    localStorage.setItem("feedback",Cas);
  }
  }); 
});
  