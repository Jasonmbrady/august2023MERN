import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Form from "./components/Form"
import Display from './components/Display'
import {useState} from "react"
import Color from "./components/Color"
import Footer from './components/Footer'

function App() {

    const [person, setPerson] = useState({
      fName: "",
      lName: "",
      email: ""
  });


  return (
    <>
    <BrowserRouter>
      <h1>Intro to React Router!</h1>
      <Routes>
        <Route path="/" element={<Form setPerson={setPerson}/>} />
        <Route path="/display" element={<Display person={person}/>} />
        <Route path="/:color" element={<Color />}/>
        <Route path="/footer/*" element={<Footer />}/>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
