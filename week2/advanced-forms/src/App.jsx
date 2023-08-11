import './App.css'
import {useState} from 'react'
import Form from './components/Form'
import Display from './components/Display'

function App() {

  const [pizzaList, setPizzaList] = useState([]);

  return (
    <div>
      <Form pizzaList={pizzaList} setPizzaList={setPizzaList}/>
      <Display pizzaList={pizzaList} />
    </div>
  )
}

export default App
