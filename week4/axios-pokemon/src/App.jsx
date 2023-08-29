import PokemonList from "./components/PokemonList"
import OnePokemon from "./components/OnePokemon"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<PokemonList />} />
      <Route path={"/pokemon/:name"} element={<OnePokemon />} />
    </Routes>
      
    </BrowserRouter>
    </>
  )
}

export default App
