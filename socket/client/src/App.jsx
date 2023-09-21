import './App.css';
import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';

function App() {

  const [socket] = useState( () => io(':8000'));
  const [message, setMessage] = useState("");

  useEffect( ()=>{
    console.log("Check if socket is running...");
    socket.on('Welcome', data => console.log(data));
    socket.on('Update', data => setMessage(data));
    return () => socket.off("Welcome");
  }, [socket])

  const clickHandler = e => {
    socket.emit("ButtonPressed", "The button has been clicked!");
  }
  return (
    <>
     <h1>Socket Test</h1>
     <h3>{message}</h3>
     <button onClick={clickHandler}>Click Me!</button>
    </>
  )
}

export default App
