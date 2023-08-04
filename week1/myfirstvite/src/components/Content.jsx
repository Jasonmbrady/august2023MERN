import React from 'react';

const Content = ({myName, myAge, unicornsLovePizza, setName}) => {
    // const myName = props.myName;
    // const {myName} = props;
    const clickHandler = event => {
        setName("Jason");
    }
    return(
        <div>
            <h3 onClick={clickHandler}>MY NAME IS {myName} and I am {myAge} years old.</h3>
            <p>Here is some content.</p>
            <p>{unicornsLovePizza}</p>
        </div>
    );
}
export default Content;