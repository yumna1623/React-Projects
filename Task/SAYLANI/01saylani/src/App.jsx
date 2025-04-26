import './app.css'
import {Navbar,Button} from "./Components"
import React, { useState } from "react";

function App() {

    const [Number,setNumber] = useState[0]
  const handleincrement = () =>{
    Number++
    setNumber(Number)

  }
  return (
    <>
      <div className="main">
      <h1>{number}</h1>
      <Button title = "Increment" myFunc={handleincrement}/>
      </div>
    </>
  )
}

export default App;
