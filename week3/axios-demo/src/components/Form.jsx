import axios from 'axios';
import React, {useState} from 'react';

const Form = ({pokemonList, setPokemonList}) => {

        const [type, setType] = useState("");
        const [allTypes] = useState(["Normal", "Fire", "Water", "Grass", "Electric", "Ice", "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dark", "Dragon", "Steel", "Fairy"])

        const formHandler = e => {
            e.preventDefault();
            // grab data from PokeAPI and filter data by type, then set state
            axios.get("http://pokeapi.co/api/v2/pokemon")
                .then( res => {
                    console.log(res.data);
                    // do stuff
                    setPokemonList(res.data);
                })

            // axios.get("http://localhost:8000/api/pokemon")
            //     .then( res => {
            //         console.log(res.data);
            //         if (type !== "") {
            //             const filteredPokemon = res.data.filter(pokemon => pokemon.type.toLowerCase() === type.toLowerCase());
            //             setPokemonList(filteredPokemon);
            //             return;
            //         } 
            //         setPokemonList(res.data);
            //     })
        }
    return(
        <form onSubmit={formHandler}>
            <select onChange={ e => setType(e.target.value)}>
                <option value="" selected>Filter by type</option>
                {
                    allTypes.map((type)=>{
                        return (
                            <option key={type} value={type}>{type}</option>
                        )
                    })
                }
            </select>
            <div>
                <button>Get Pokemon!</button>
            </div>
        </form>
    );
}

export default Form;