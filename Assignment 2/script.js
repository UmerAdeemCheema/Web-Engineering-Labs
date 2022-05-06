function openForm() {
    document.getElementById("loginForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("loginForm").style.display = "none";
}

var credentials = [
    {
        username:"Alpha",
        password:"alpha"
    },
    {
        username:"Bravo",
        password:"bravo"
    },
    {
        username:"Charlie",
        password:"charlie"
    },
];

function login() {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;

    for (const userCredential of credentials) {
        if (userCredential.username == user && userCredential.password == pass) {
            alert("!!Login Successfull!!");
            closeForm();
            return;
        }
    }
    alert("!!Invalid Credentials!!");
}
