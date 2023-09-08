import React, {useState, useEffect} from 'react';
import axios from "axios"
import { useParams, useNavigate } from 'react-router-dom';

const UpdateLocationForm = ({allTrucks, setAllTrucks}) => {

    const [foodTruck, setFoodTruck] = useState({
        name: "", 
        foodType: "",
        location: ""
    });
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect( ()=>{
        axios.get(`http://localhost:8000/api/trucks/${id}`)
            .then(res => setFoodTruck(res.data))
    }, [setFoodTruck])

    const updateLocationHandler = e => {
        e.preventDefault();
        const updatedFoodTruck = {
            location: foodTruck.location
        }
        axios.patch(`http://localhost:8000/api/trucks/${id}`, updatedFoodTruck)
            .then( res => {
                const updatedTrucks = allTrucks.map( truck => 
                    truck._id === id ? res.data : truck
                )
                // console.log(updatedTrucks);
                setAllTrucks(updatedTrucks);
                navigate("/");
            })
    }
    return(
        <form onSubmit={updateLocationHandler}>
            <h3>Where did you see {foodTruck.name}?</h3>
            <div>
                <label>Location:</label>
                <input type="text" value={foodTruck.location} onChange={ e => setFoodTruck({...foodTruck, location: e.target.value})} />
            </div>
            <button>Submit</button>
        </form>
    );
}

export default UpdateLocationForm;