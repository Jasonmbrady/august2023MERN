import {useState, useEffect} from 'react'
import './App.css'

function App() {
  const [pokemon, setPokemon] = useState(null)

  useEffect( ()=>{
    fetch("https://pokeapi.co/api/v2/pokemon/ekans")
      .then( response => response.json() )
      .then( data => {
        console.log(data);
        setPokemon(data);
      })
  }, [])
  return (
    <>
      <h1>Here is our pokemon!</h1>
      {
        pokemon ? <><h3>{pokemon.name}</h3><img src={pokemon.sprites.front_default} style={{height: 250, width: 250}} alt="A pokemon!" /></> : <></>
      }
    </>
  )
}

export default App
