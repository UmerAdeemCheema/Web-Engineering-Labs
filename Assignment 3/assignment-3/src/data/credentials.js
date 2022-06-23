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

function login(props, username, password) {

    for (const userCredential of credentials) {
        if (userCredential.username == username && userCredential.password == password) {
            alert("!!Login Successfull!!");
            props.setButtonTrigger(false);
            return;
        }
    }
    alert("!!Invalid Credentials!!");
}

export default login;