const compose = (f, g) => (a) => f(g(a));
const squareOfR = (num) => num * num;
const multiplybyPi = (num) => num * 3.142;

function calculateArea(){
    var area = compose(multiplybyPi, squareOfR)(5)
    alert("area = " + area);
}