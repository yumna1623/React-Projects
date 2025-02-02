import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
    const passworfRef  = useRef(null) //

    const copyPasswordToClipBoard = useCallback(()=>{

        


    },[password])
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

useEffect(() => {
  passwordGenerator(); // Regenerate the password
}, [length, numberAllowed, charAllowed, passwordGenerator]);
  return (
    <div className=" w-full max-w-md mx-auto shadow-md  px-5 py-10 my-8 bg-gray-800 text-orange-500 rounded-lg">
      <h1 className="text-white text-center my-4 text-2xl">
        Password generator
      </h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-gray-600">
        <input
          type="text"
          min={6}
          max={12}
          value={password}
          className="outline-none w-full py-2 px-3 text-white"
          placeholder="Password"
          readOnly
          ref={passworfRef}
        />
        <button className="bg-orange-600 text-white px-4 py-2 hover:bg-orange-500"
        onClick={()=>{
            copyPasswordToClipBoard
        }}
        >
          Copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex fles -items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={12}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length:{length}</label>
        </div>
        <div className="flex fles -items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            className="cursor-pointer"
            onChange={(e) => {
              setNumberAllowed((prev) => !prev);
            }}
          />{" "}
          <label>Numbers</label>
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="numberInput"
            className="cursor-pointer"
            onChange={(e) => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label>Characters</label>
          </div>
      </div>
    </div>
  );
}

export default App;
