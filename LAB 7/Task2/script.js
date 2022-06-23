function first() {
	var user = "Cheema";
	function second() {
		alert("Hello "+user);
	}
	return second;
}

function greet(){
    var newFunc = first();
    newFunc();
}
