import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Form = ({setPerson}) => {

    const [newPerson, setNewPerson] = useState({
        fName: "",
        lName: "",
        email: ""
    })
    const navigate = useNavigate();

    const newPersonHandler = e => {
        e.preventDefault();
        setPerson(newPerson);
        setNewPerson({
            fName: "",
            lName: "",
            email: ""
        });
        navigate("/display")

    }

    return(
        <form onSubmit={newPersonHandler}>
            <div>
                <label>First Name</label>
                <input type="text" value={newPerson.fName} onChange={ e => setNewPerson({...newPerson, fName: e.target.value}) }/>
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" value={newPerson.lName} onChange={e => setNewPerson({...newPerson, lName: e.target.value})}/>
            </div>
            <div>
                <label>Email</label>
                <input type="email" value={newPerson.email} onChange={e => setNewPerson({...newPerson, email: e.target.value})}/>
            </div>
            <button>Submit</button>
        </form>
    );
}

export default Form;