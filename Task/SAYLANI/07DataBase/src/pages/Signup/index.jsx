import React, { useState } from "react";
import { createUserWithEmailAndPassword  } from "firebase/auth";
import { auth } from "../../Config.js";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword (auth, email, password)
      .then(() => {
        alert("User Created Successfully");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      <h1>Signup</h1>
      <form>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <br></br>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <br></br>
      <p>Already have a account? <Link to={"/Login"} >Loign</Link></p>
        <button type="submit" onClick={handleSignup}>
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
