import React, {useState} from 'react';

const Form = ({collection, setCollection}) => {

    const [type, setType] = useState("");
    const [card, setCard] = useState("");
    const [condition, setCondition] = useState("");

    const formHandler = e => {
        e.preventDefault();
        const newCard = {type, card, condition};
        setCollection([...collection, newCard]);
        setType("");
        setCard("");
        setCondition("");
    }

    return(
        <form onSubmit={formHandler}>
            <div>
                <label>Type</label>
                <input value={type} onChange={e => setType(e.target.value)} />
            </div>
            <div>
                <label>Card</label>
                <input value={card} onChange={e => setCard(e.target.value)} />
            </div>
            <div>
                <label>Conditon</label>
                <input value={condition} onChange={e => setCondition(e.target.value)} />
            </div>
            <button>Submit</button>
        </form>
    );
}

export default Form;