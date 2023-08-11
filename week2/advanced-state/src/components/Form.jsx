import React, {useState} from 'react';

const Form = (props) => {
    const [state, setState] = useState({
        person: {
            fName: "",
            lName: "",
            favoriteIceCream: ""
        }
    })

    const handleStateChange = event => {
        setState({...state, person: { ...state.person, [event.target.name]: event.target.value}})
    }
    // const [person, setPerson] = useState({
    //     fName: "",
    //     lName: "",
    //     favoriteIceCream: ""
    // });
    // const [fName, setFName] = useState("");
    // const [lName, setLName] = useState("");
    // const [favoriteIceCream, setFavoriteIceCream] = useState("");

    const clearHandler = event => {
        event.preventDefault();
        // setFName("");
        // setLName("");
        // setFavoriteIceCream("");
        setPerson({
            fName: "",
            lName: "",
            favoriteIceCream: ""
        });
    }

    return(
        <>
        <h3>Name: {state.person.fName} {state.person.lName}</h3>
        <p>Favorite Ice Cream: {state.person.favoriteIceCream}</p>
        <form >
            <div>
                <label>First Name</label>
                <input name="fName" value={state.person.fName} onChange={handleStateChange}/>
            </div>
            <div>
                <label>Last Name</label>
                <input name="lName" value={state.person.lName} onChange={handleStateChange}/>
            </div>
            <div>
                <label>Favorite Ice Cream</label>
                <input name="favoriteIceCream" value={state.person.favoriteIceCream} onChange={handleStateChange}/>
            </div>
            <button onClick={clearHandler}>Clear</button>
        </form>
        </>
    );
}

export default Form;