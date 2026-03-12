let btn = document.getElementById("begin");
let arr = JSON.parse(localStorage.getItem("element")) || [];
btn.addEventListener("submit",function(e){
     e.preventDefault();
     let name = document.getElementById("Name").value;
     let adult = document.getElementById("numbera").value;
     let child = document.getElementById("numberb").value;
     let checkin = document.getElementById("datea").value;
     let checkout = document.getElementById("dateb").value;
     const max=400;
     const min=300;
     let join = new Date(checkin);
     let leave = new Date(checkout);
     let found=false;
     let count=0;
     let code;
     let mature=100;
     let children=50;
     const diff=(leave-join)/(1000*60*60*24);
      while(!found && count<100){
       code=Math.floor(Math.random()*(max-min+1))+min;
       count++;
       if(!arr.some(item =>item.promo==code)){
         found=true;
       }
     }
     if(!name || !join|| !leave){
        alert(`Please fill all filed!`);
        return;
     }else if(diff<1){
        alert(`Incorrect Date!`);
        return;
     }else if(found){
         let cost= diff*((adult*mature)+(children*child));
         let room_number=code-300;
         let reservation = {
            name: name,
            adult: adult,
            child: child,
            checkin: checkin,
            checkout: checkout,
            room:room_number,
            promo: code,
            total: cost,
            days: diff
          };
         arr.push(reservation)
         localStorage.setItem("element",JSON.stringify(arr));
         alert(`Welcome ${reservation.name}\nRoom number:${reservation.room} \nPromo : ${reservation.promo}`);
         return;
      } 
});
