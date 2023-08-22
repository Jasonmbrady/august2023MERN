import React from 'react';

const Display = ({pokemonList}) => {
    return(
        <table className="table table-striped">
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Type(s)</td>
                    <td>Sprite</td>
                </tr>
            </thead>
            <tbody>
                {
                    pokemonList.map(pokemon =>{
                        return (
                            <tr>
                                <td>{pokemon.name}</td>
                                <td>{pokemon.type}</td>
                                <td><img src={pokemon.sprite} alt="It's a pokemon!" /></td>
                            </tr>
                        )
                    })
               }
            </tbody>
        </table>
    );
}

export default Display;