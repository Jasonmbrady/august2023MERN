import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

const Dashboard = ({loggedUser, setLoggedUser}) => {

    const [allUsers, setAllUsers] = useState([]);
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect( ()=>{
        console.log(loggedUser)
        axios.get("http://localhost:8000/api/users", {withCredentials: true})
            .then( res => {
                setIsLoggedIn(true);
                setAllUsers(res.data);
            })
            .catch( err => {
                // setIsLoggedIn(false);
                setLoggedUser(null);
            })
    }, [])

    const logoutHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/logout", {}, {withCredentials: true})
            .then( res => {
                navigate("/")
            })
    }

    return(
        <div>
            <Link to="/">Return to login</Link>
            <form onSubmit={logoutHandler}>
                <button>Log Out</button>
            </form>
            { loggedUser === null ? <h1>Must be logged in!</h1> : <><h1>Welcome {loggedUser.firstName}!</h1>
            <table >
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allUsers.map( (user)=>{
                            return (
                                <tr>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            
            </>
            }
        </div>
    );
}

export default Dashboard;