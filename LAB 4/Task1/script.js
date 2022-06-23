var a = parseInt(prompt("Enter 1st Number : "));
var b =parseInt(prompt("Enter 2nd Number : "));
var op = parseInt(prompt("Operations\n Press 1 for + \n Press 2 for - \n Press 3 for / \n Press 4 for * \n Press 5 for ++ \n Press 6 for -- \n Press 7 for % \n"));


switch (op) {
    case 1:
      alert("a + b = "+(a+b));
      break;
    case 2:
        alert("a - b = "+(a-b));
      break;
    case 3:
        alert("a * b = "+(a*b));
      break;
    case 4:
        alert("a / b = "+(a/b));
      break;
    case 5:
        alert("a++ = "+(a+1));
        alert("b++ = "+(b+1));
      break;
    case 6:
        alert("a-- = "+(a-1));
        alert("b-- = "+(b-1));
      break;
    case 7:
        alert("a % b = "+(a%b));
      default:
        alert("Error");
  }