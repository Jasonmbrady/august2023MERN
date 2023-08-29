import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

const OnePokemon = (props) => {

    const [pokemon, setPokemon] = useState(null);
    const {name} = useParams();

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(res=>{
                console.log(res.data);
                setPokemon(res.data);
            })
    }, [])

    return(
        <div>
            {
                pokemon ? <><h3>{pokemon.name}</h3><img src={pokemon.sprites.front_default} style={{height: 250, width: 250}}/></>: <></>

            }
        </div>
    );
}

export default OnePokemon;