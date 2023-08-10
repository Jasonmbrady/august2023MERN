import React, {useState} from 'react';
import Form from './Form';
import PersonCard from './PersonCard';

const Main = (props) => {

    const [person, setPerson] = useState(null);
    const [people, setPeople] = useState([]);

    return(
        <div>
            <PersonCard person={person} people={people}/>
            <Form setPerson={setPerson} people={people} setPeople={setPeople}/>
        </div>
    );
}

export default Main;