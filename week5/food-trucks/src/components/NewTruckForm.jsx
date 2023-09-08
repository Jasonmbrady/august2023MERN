import React, {useState} from 'react'
import {Link, useBeforeUnload, useNavigate} from "react-router-dom"
import axios from "axios";

const NewTruckForm = ({allTrucks, setAllTrucks}) => {

    const [name, setName] = useState("");
    const [foodType, setFoodType] = useState("");
    const [location, setLocation] = useState("");
    const navigate = useNavigate();

    const newTruckHandler = e => {
        e.preventDefault();
        const newTruck = { name, foodType, location }
        axios.post("http://localhost:8000/api/trucks", newTruck)
            .then( res => {
                setAllTrucks([...allTrucks, res.data]);
                navigate("/");
            })
    }
    return(
        <form onSubmit={newTruckHandler}>
             <h3><Link to={"/"}>Home</Link></h3>
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={ e => setName(e.target.value)}/>
            </div>
            <div>
                <label>Food Type</label>
                <input type="text" value={foodType} onChange={ e => setFoodType(e.target.value)}/>
            </div>
            <div>
                <label>Location</label>
                <input type="text" value={location} onChange={ e => setLocation(e.target.value)}/>
            </div>
            <button>Submit</button>
        </form>
    );
}

export default NewTruckForm;