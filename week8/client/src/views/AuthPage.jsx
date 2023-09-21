import React from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const AuthPage = ({setLoggedUser}) => {
    return(
        <>
            <h1>Welcome to MERN Auth!</h1>
            <div className="authpage">
                <LoginForm setLoggedUser={setLoggedUser}/>
                <RegisterForm setLoggedUser={setLoggedUser}/>
            </div>
        </>
    );
}

export default AuthPage;