var value = document.getElementById("value");
var power = document.getElementById("power");
var button = document.getElementById("calBtn");

function calculatePower(){
    if(value.value.length > 0){
        var result = Math.pow(value.value,100);
        power.value = result;
        value.value = '';
    }
}

button.addEventListener("click", calculatePower);