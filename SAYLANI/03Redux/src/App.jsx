import React from "react";
import "./App.css";
import { Home, Login, NavBar } from "./Screens";
import { useSelector } from "react-redux";
import { Button } from "./component";

function App() {

    const isUserLogin = useSelector((state) => state.auth.isLoggedIn);

  return (
    <>

{isUserLogin ? <Home /> : <Login />}     
    </>
  );
}

export default App;
