import './App.css'
import Content from "./components/Content"
import React, {useState} from "react"

function App() {
  const [name, setName] = useState("");
  return (
    <div>
      <h1 style={{color: "goldenrod"}}>Hello, World!</h1>
      <Content myName={name} myAge={44} unicornsLovePizza={"Yes, they do!"} setName={setName}/>
    </div>
  )
}

export default App
