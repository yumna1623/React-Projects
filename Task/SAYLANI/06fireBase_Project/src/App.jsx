import { Navigate, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./Config";

function App() {
  const [user, setUser] = useState("no-user");

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);
  if (user === "no-user") 
    return <h1>Loading...</h1>;
  

  return (
    <Routes>
      <Route path="/" element={user ? <Home /> : <Navigate to={"./Login"} />} />
      <Route
        path="/Login"
        element={!user ? <Login /> : <Navigate to={"/"} />}
      />
      <Route
        path="/Signup"
        element={!user ? <Signup /> : <Navigate to={"/"} />}
      />
    </Routes>
  );
}

export default App;
