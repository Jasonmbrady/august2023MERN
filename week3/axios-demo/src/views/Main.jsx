import React, {useState} from 'react';
import Form from './Form';
import Display from './Display';


const Main = (props) => {
    const [pokemonList, setPokemonList] = useState([]);

    return(
        <div>
            <Form pokemonList={pokemonList} setPokemonList={setPokemonList}/>
            <Display pokemonList={pokemonList}/>
        </div>
    );
}

export default Main;