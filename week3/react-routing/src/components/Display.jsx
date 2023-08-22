import React from 'react';
import {Link} from "react-router-dom"

const Display = ({person}) => {
    return(
        <div>
            <p><Link to={"/"}>Home</Link></p>
            <h3>{person.fName} {person.lName}</h3>
            <p>Email: {person.email}</p>
        </div>
    );
}

export default Display;