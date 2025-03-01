
import {Navbar,Button} from "./Components"
import React from "react";

function App() {
  const handleclick = () =>{
    console.log("click");
  }
  return (
    <>
      <Navbar/>
      <Button title = "submit" myFunc={handleclick}/>
      <Button title = "sign-up" myFunc={handleclick}/>
    </>
  )
}

export default App;
