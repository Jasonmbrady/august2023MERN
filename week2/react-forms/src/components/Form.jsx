import React, {useState} from 'react';

const Form = ({setPerson, people, setPeople}) => {

    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [favoriteIceCream, setFavoriteIceCream] = useState("");

    const formHandler = event => {
        event.preventDefault();
        const newPerson = {
            fName, lName, favoriteIceCream
        };
        setFName("");
        setLName("");
        setFavoriteIceCream("");
        // setPerson(newPerson);
        setPeople([...people, newPerson]);
    }

    const clearHandler = event => {
        event.preventDefault();
        setPerson(null);
    }

    return(
        <form onSubmit={formHandler}>
            <div>
                <label>First Name</label>
                <input value={fName} onChange={ e => setFName(e.target.value)}/>
            </div>
            <div>
                <label>Last Name</label>
                <input value={lName} onChange={e => setLName(e.target.value)}/>
            </div>
            <div>
                <label>Favorite Ice Cream</label>
                <input value={favoriteIceCream} onChange={e => setFavoriteIceCream(e.target.value)}/>
            </div>
            <button>Submit</button>
            <button onClick={clearHandler}>Clear</button>
        </form>
    );
}

export default Form;