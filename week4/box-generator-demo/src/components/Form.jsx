import React, {useState} from 'react';

const Form = ({boxList, setBoxList}) => {
    const [color, setColor] = useState("");
    const [size, setSize] = useState(0);

    const newBoxHandler = e => {
        e.preventDefault();
        const newBox = {
            color: color, 
            size: parseInt(size) // NaN
        }
        setBoxList([...boxList, newBox]);
        setColor("");
        setSize(0);
    }
    return(
        <form onSubmit={newBoxHandler}>
            <h3>Add a new box!</h3>
            <div>
                <label>Color:</label>
                <input type="text" value={color} onChange={ e => setColor(e.target.value) }/>
            </div>
            <div>
                <label>Size:</label>
                <input type="number" value={size} onChange={ e => setSize(e.target.value) }/>
            </div>
            <button>Create</button>
        </form>
    );
}

export default Form;