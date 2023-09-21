import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AuthPage from './views/AuthPage';
import Dashboard from './views/Dashboard';
import {useState} from 'react';

function App() {

  const [loggedUser, setLoggedUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage setLoggedUser={setLoggedUser} />} />
        <Route path="/dashboard" element={<Dashboard setLoggedUser={setLoggedUser} loggedUser={loggedUser} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
