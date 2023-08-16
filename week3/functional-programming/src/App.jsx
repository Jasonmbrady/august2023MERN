import './App.css'
import Form from './components/Form'
import Display from './components/Display'
import {useState} from 'react'

function App() {

  const [collection, setCollection] = useState([]);

  return (
    <>
      <h1>Card Collection Tracker</h1>
      <Form collection={collection} setCollection={setCollection}/>
      <Display collection={collection} setCollection={setCollection}/>
    </>
  )
}

export default App
