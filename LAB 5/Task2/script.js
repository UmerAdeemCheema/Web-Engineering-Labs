var radius = document.getElementById("radius");
var volume = document.getElementById("volume");
var button = document.getElementById("calBtn");

function calculateRadius(){
    if(radius.value.length > 0){
        volume.value = 4*(3.14*radius.value*radius.value*radius.value)/3;
        radius.value = '';
    }
}

button.addEventListener("click", calculateRadius);