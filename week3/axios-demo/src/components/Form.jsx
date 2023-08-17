import axios from 'axios';
import React, {useState} from 'react';

const Form = ({pokemonList, setPokemonList}) => {

        const [type, setType] = useState("");
        const [allTypes] = useState(["Normal", "Fire", "Water", "Grass", "Electric", "Ice", "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dark", "Dragon", "Steel", "Fairy"])

        const formHandler = async e => {
            e.preventDefault();
            // grab data from PokeAPI and filter data by type, then set state
            const grabbedPokemonList = [];

            axios.get("https://pokeapi.co/api/v2/pokemon")
                .then( res => {
                    console.log(res.data);
                    return res.data.results;
                    // rawPokemonList.map((pokemon)=>{
                    //     axios.get(pokemon.url)
                    //         .then( async res => {
                    //             console.log(res.data)
                    //             await grabbedPokemonList.push(res.data)
                    //             if(type){
                    //                 const filteredPokemonList = grabbedPokemonList.filter((pokemon)=>{
                    //                     pokemon.types.includes(type);
                    //                 })
                    //                 setPokemonList(filteredPokemonList)
                    //             }
                    //             setPokemonList(grabbedPokemonList);
                                
                    //         })
                    // })
                })
                

            // setPokemonList(filteredList)
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