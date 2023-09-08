import {BrowserRouter, Routes, Route} from "react-router-dom"
import {useState, useEffect} from "react"
import axios from "axios"
import Header from "./components/Header"
import AllTrucks from "./components/AllTrucks"
import NewTruckForm from "./components/NewTruckForm"
import UpdateLocationForm from "./components/UpdateLocationForm"
import "./App.css"

function App() {

  const [allTrucks, setAllTrucks] = useState([]);

  useEffect( ()=>{
    axios.get("http://localhost:8000/api/trucks")
      .then( res => setAllTrucks(res.data))
  }, [])

  return (

    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path={"/"} element={<AllTrucks allTrucks={allTrucks} setAllTrucks={setAllTrucks} />} />
          <Route path={"/truck/new"} element={<NewTruckForm allTrucks={allTrucks} setAllTrucks={setAllTrucks}/>}/>
          <Route path={"/truck/updateLocation/:id"} element={<UpdateLocationForm allTrucks={allTrucks} setAllTrucks={setAllTrucks}/>}/>
        </Routes>
      </>
    </BrowserRouter>

  )
}

export default App
