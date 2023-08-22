import './App.css'
import {useState} from 'react'
import Display from './components/Display'
import Form from './components/Form'

function App() {
  const [boxList, setBoxList] = useState([{
    color: "red",
    size: 100
  }])

  return (
    <>
     <Form setBoxList={setBoxList} boxList={boxList}/>
     <Display boxList={boxList}/>
    </>
  )
}

export default App
