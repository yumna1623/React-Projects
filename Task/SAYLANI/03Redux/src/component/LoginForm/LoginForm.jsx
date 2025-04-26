import { useState } from "react";
import "./LoginForm.css";
import { useSelector } from "react-redux";
import { Home } from "../../Screens";
import { Login } from "../../Screens";
import { Button } from "../index";

const LoginForm = () => {
  //   const isUserLogin = useSelector((state) => state.auth.isLoggedin);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    alert("Login Successful!");
  };

  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <h2 className="login-title">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="label">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                required
              />
            </div>
            <div className="mb-4">
              <label className="label">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
                required
              />
            </div>
            <div className="button-container"><Button /></div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
