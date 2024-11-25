var turn = true
function turnOn(){
   var body = document.getElementById("body")
   if (turn){
        body.style.backgroundImage = "url('on2.jpg')";
        body.style.backgroundSize = "cover"; 
        body.style.backgroundRepeat = "no-repeat";
        document.getElementById("on").innerHTML = "turn off"
        turn = !turn
   }else{
        body.style.backgroundImage = "url('dark.jpg')";
        body.style.backgroundSize = "cover"; 
        body.style.backgroundRepeat = "no-repeat";
        document.getElementById("on").innerHTML = "turn on"
        turn = !turn
   }

}
