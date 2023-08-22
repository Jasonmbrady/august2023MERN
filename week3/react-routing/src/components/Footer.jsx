import React from 'react';
import {Routes, Route} from "react-router-dom"
import One from "./One"
import Many from './Many';

const Footer = (props) => {
    return(
        <Routes>
            <Route path="/one" element={<One />}/>
            <Route path="/many" element={<Many />}/>
        </Routes>
    );
}

export default Footer;