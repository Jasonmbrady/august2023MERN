import React from 'react';
import { useParams } from 'react-router-dom';

const Color = (props) => {

    const {color} = useParams();

    return(
        <h1 style={{color: color}}>{color}</h1>
    );
}

export default Color;