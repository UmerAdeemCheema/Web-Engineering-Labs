var input = document.getElementById("userInput");
var button = document.getElementById("add");
var ul = document.getElementById("list");

button.addEventListener("click", addListItemAfterBtnClick);

function inputLength(){
    return input.value.length;
}


function createListElement(){
    var li = document.createElement("li");
    li.className = "liOn";
    li.setAttribute('onclick', "toggleClass(this)");
    li.appendChild(document.createTextNode(input.value));
    var delBtn = document.createElement("input");
    delBtn.setAttribute('type', 'button');
    delBtn.setAttribute('value', "X");
    delBtn.setAttribute('onclick', "deleted(this)");
    li.appendChild(delBtn);
    ul.appendChild(li);
    input.value = '';
}

function addListItemAfterBtnClick(){
    if(inputLength() > 0){
        createListElement();
    }
}

function deleteTask(x)
{
    x.parentElement.remove();
}


function toggleClass(x) {
    if (x.className == "liOn") {
        x.className = "liDone";
    } else {
        x.className = "liOn";
    }
}
