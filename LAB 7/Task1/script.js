var length = document.getElementById("length");
var width = document.getElementById("width");
var height = document.getElementById("height");
var volume = document.getElementById("volume");

const curriedMultiply = (a) => (b) => (c) => a * b * c;

function calculateVolume(){
    if(length.value.length > 0 && width.value.length > 0 && height.value.length > 0){
        volume.value = curriedMultiply(length.value)(width.value)(height.value);
        length.value = '';
        width.value = '';
        height.value = '';
    }
}