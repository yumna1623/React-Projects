import { useState, useEffect } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [running]);

  const handleStart = () => setRunning(true);
  const handleStop = () => setRunning(false);
  const handleReset = () => {
    setRunning(false);
    setTime(0);
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-900 text-white rounded-lg shadow-lg w-64">
      <h1 className="text-2xl font-bold">Stopwatch</h1>
      <p className="text-xl mt-2">{new Date(time * 1000).toISOString().substr(11, 8)}</p>
      <div className="mt-4 flex space-x-2">
        <button onClick={handleStart} className="bg-green-500 px-4 py-2 rounded-lg">Start</button>
        <button onClick={handleStop} className="bg-red-500 px-4 py-2 rounded-lg">Stop</button>
        <button onClick={handleReset} className="bg-blue-500 px-4 py-2 rounded-lg">Reset</button>
      </div>
    </div>
  );
}
