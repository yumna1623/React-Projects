import React from "react";
import UserContext from "../Context/UserContext";
import { useState,useContext } from "react";

function Login() {

    const [username ,setUsername] = useState("");
    const [password ,setPassword] = useState("");

    const{setUser} = useContext(UserContext);
    const handleSubmit = (e)=>{
        e.preventDefault()
        alert("Logged in successfully",username)
        setUser({username,password})

    }

    return(
        <div className="flex flex-col items-center justify-center h-120 gap-5" >
        <input type="text" 
        className="border-black-600 border-2 rounded-xl p-2"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}     
        placeholder="Username"
        />
        { "    " }
        <input type="password" 
        className="border-black-600 border-2 rounded-xl p-2"
        value = {password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder="Password"/>

        <button onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >Submit</button>
    </div>
    )
}
export default Login;