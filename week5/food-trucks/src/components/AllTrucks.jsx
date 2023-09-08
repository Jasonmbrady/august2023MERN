import React from 'react';
import {Link} from "react-router-dom"


const AllTrucks = ({allTrucks, setAllTrucks}) => {

    return(
        <div>
            <table>
                <tr>
                    <th>Truck Name</th>
                    <th>Food Type</th>
                    <th>Current Location</th>
                    <th>Average Rating</th>
                    <th>Actions</th>
                </tr>
                {
                    allTrucks.map( truck=>{
                        return (
                            <tr key={truck._id}>
                                <td>{truck.name}</td>
                                <td>{truck.foodType}</td>
                                <td>{truck.location}</td>
                                <td></td>
                                <td><Link to={`/truck/updateLocation/${truck._id}`}>update location</Link> | Rate this truck</td>
                            </tr>
                        )
                    })
                }
            </table>
            <p>Don't see your favorite truck? <Link to={"/truck/new"}>Click Here</Link> to add it!</p>
        </div>
    );
}

export default AllTrucks;