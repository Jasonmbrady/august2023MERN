import React, {useState, useEffect} from 'react';

const MainContent = () => {
    // const occasion = props.occasion;
    // const expression = props.expression;
    // const {occasion, expression} = props;
    const [number, setNumber] = useState(0);
    const [phrase, setPhrase] = useState("");
    const [color, setColor] = useState("");
    
    const counterClickHandler = event => {
        // event.preventDefault();
        const newNumber = number + 1;
        setNumber(newNumber);
    }
    
    return(
        <div>
            <h3 style={{color: color}}>{phrase}</h3>
            <p>{number}</p>
            <button onClick={counterClickHandler}>+1</button>
                <div>
                    <label>Phrase</label>
                    <input type="text" value={phrase} onChange={e => setPhrase(e.target.value)}/>
                </div>
                <div>
                    <label>Color</label>
                    <input type="text" value={color} onChange={e => setColor(e.target.value)}/>
                </div>

        </div>
    );
}
export default MainContent;