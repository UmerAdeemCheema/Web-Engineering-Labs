import { useState } from 'react';
import "./components.css";
import login from "../data/credentials";

function Popup(props){
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    }


    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner light-css">
                <h1>Login</h1>
                <label for="username"><b>User Name</b></label>
                <input type="text" id="user" placeholder="Enter Username" name="username" value={username} onChange={(e)=>setUserName(e.target.value)} required/>
                <label for="psw"><b>Password</b></label>
                <input type="password" id="pass" placeholder="Enter Password" name="psw" value={password}  onChange={(e)=>setPassword(e.target.value)} required/>    
                <button type="button" className="btn btn-outline btn-lg" onClick={()=>login(props, username, password)}>Login</button>
                <button type="button" className="btn btn-outline btn-lg" onClick={()=>props.setButtonTrigger(false)}>Close</button>
            </div>
        </div>
    ) : "";
}

export default Popup;