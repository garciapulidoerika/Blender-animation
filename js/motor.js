
let blenderstate = "turnedoff";
let blendersound = document.getElementById("blender-sound"); 
let blenderbutton = document.getElementById("blender-button-sound") 
let blender = document.getElementById("blender"); 

function announc() {
    alert('press the blender button to TURN IT ON or to TURN IT OFF');
}
announc()

function controlBlender() {
    
    if (blenderstate == "turnedoff") { 
        blenderstate = "turnedon";
        brrBrr();  
        blender.classList.add("active"); 
       
    } else {
        blenderstate = "turnedoff"
        brrBrr();  
        blender.classList.remove("active"); 
    }
}

function brrBrr(){    
    if(blendersound.paused) {
        blenderbutton.play();
        blendersound.play()
    } else {
        blenderbutton.play();
        blendersound.pause();
        blendersound.currentTime = 0;
    }
}