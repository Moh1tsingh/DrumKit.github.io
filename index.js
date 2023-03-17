
var btn_all = document.querySelectorAll("button");


btn_all[0].addEventListener("click",handleclick);
btn_all[1].addEventListener("click",handleclick);
btn_all[2].addEventListener("click",handleclick);
btn_all[3].addEventListener("click",handleclick);
btn_all[4].addEventListener("click",handleclick);
btn_all[5].addEventListener("click",handleclick);
btn_all[6].addEventListener("click",handleclick);

function handleclick(){

     if(this.innerHTML == "w"){

        var sound = new Audio("sounds/tom-1.mp3");
        sound.play(); 
     }
     else if(this.innerHTML == "a"){
        var sound = new Audio("sounds/tom-2.mp3");
        sound.play(); 
     }
     else if(this.innerHTML == "s"){
        var sound = new Audio("sounds/tom-3.mp3");
        sound.play(); 
     }
     else if(this.innerHTML == "d"){
        var sound = new Audio("sounds/tom-4.mp3");
        sound.play(); 
     }
     else if(this.innerHTML == "j"){
        var sound = new Audio("sounds/kick-bass.mp3");
        sound.play(); 
     }
     else if(this.innerHTML == "k"){
        var sound = new Audio("sounds/crash.mp3");
        sound.play(); 
     }
     else if(this.innerHTML == "l"){
        var sound = new Audio("sounds/snare.mp3");
        sound.play(); 
     }


     document.addEventListener("keydown",function(event){
        makesound(event.key);

     });

    function makesound(key){
        if(key == "w"){

            var sound = new Audio("sounds/tom-1.mp3");
            sound.play(); 
         }
         else if(key == "a"){
            var sound = new Audio("sounds/tom-2.mp3");
            sound.play(); 
         }
         else if(key == "s"){
            var sound = new Audio("sounds/tom-3.mp3");
            sound.play(); 
         }
         else if(key == "d"){
            var sound = new Audio("sounds/tom-4.mp3");
            sound.play(); 
         }
         else if(key == "j"){
            var sound = new Audio("sounds/kick-bass.mp3");
            sound.play(); 
         }
         else if(key == "k"){
            var sound = new Audio("sounds/crash.mp3");
            sound.play(); 
         }
         else if(key == "l"){
            var sound = new Audio("sounds/snare.mp3");
            sound.play(); 
         }
    }
    
    
}
