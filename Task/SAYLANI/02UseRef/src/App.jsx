// import './app.css'
import Button from "./component/button";
import React, { useEffect, useState, useRef, useId } from "react";
import "./app.css";

function App() {
  const h1Ref = useRef(null); //used to get the element
  const [Number, setNumber] = useState(100);
  const handleincrement = () => {
    setNumber(Number + 1);
  };
  const handledecrement = () => {
    setNumber(Number - 1);
  };

  useEffect(() => {
    // console.log(h1Ref.current);

    if (Number > 0) {
      setTimeout(() => {
        setNumber(Number - 1); //timer
      }, 1000);
    }
  }, [Number]);
  return (
    <>
      <div className="main">
        <h1 ref={h1Ref}>{Number}</h1>

        <Button title="Increment" myFunc={handleincrement} />
        <Button title="Decrement" myFunc={handledecrement} />
      </div>
    </>
  );
}

export default App;
