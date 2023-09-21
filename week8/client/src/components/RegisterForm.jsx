import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const RegisterForm = ({setLoggedUser}) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const registerHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/register", {firstName, lastName, email, password, confirmPassword}, {withCredentials: true})
            .then( res => {
                setLoggedUser({
                    _id: res.data._id,
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    email: res.data.email
                })
                navigate("/dashboard")
            })
    }

    return(
        <form onSubmit={registerHandler}>
            <h3>Sign up here!</h3>
            <div>
                <label>First Name</label>
                <input type="text" value={firstName} onChange={ e => setFirstName(e.target.value)}/>
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" value={lastName} onChange={ e => setLastName(e.target.value)}/>
            </div>
            <div>
                <label>Email</label>
                <input type="email" value={email} onChange={ e => setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={password} onChange={ e => setPassword(e.target.value)}/>
            </div>
            <div>
                <label>Confirm Password</label>
                <input type="password" value={confirmPassword} onChange={ e => setConfirmPassword(e.target.value)}/>
            </div>
            <button>Register</button>
        </form>
    );
}

export default RegisterForm;