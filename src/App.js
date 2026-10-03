import React, { useState } from "react";

function App() {
  const [display, setDisplay] = useState("0");

  const handleClick = (val) => {
    if (display === "0") setDisplay(val.toString());
    else setDisplay(display + val);
  };

  const handleClear = () => setDisplay("0");

  const handleEquals = () => {
    try {
     

      const result = new Function('return ' + display)();
setDisplay(result.toString());


      setDisplay(eval(display).toString());

    } catch {
      setDisplay("Error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      
      <h1 className="text-3xl font-bold mb-6 text-center">Calculator</h1>

      
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-sm">
        
        <div className="bg-gray-700 text-right text-2xl p-4 mb-4 rounded">
          {display}
        </div>

       
        <div className="grid grid-cols-4 gap-3">
          {[7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleClick(num)}
              className="bg-gray-600 hover:bg-gray-500 text-white p-4 rounded text-lg font-semibold"
            >
              {num}
            </button>
          ))}
          <button
            onClick={handleClear}
            className="bg-red-600 hover:bg-red-500 text-white p-4 rounded text-lg font-semibold"
          >
            C
          </button>

          {[4, 5, 6].map((num) => (
            <button
              key={num}
              onClick={() => handleClick(num)}
              className="bg-gray-600 hover:bg-gray-500 text-white p-4 rounded text-lg font-semibold"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => handleClick("+")}
            className="bg-blue-600 hover:bg-blue-500 text-white p-4 rounded text-lg font-semibold"
          >
            +
          </button>

          {[1, 2, 3].map((num) => (
            <button
              key={num}
              onClick={() => handleClick(num)}
              className="bg-gray-600 hover:bg-gray-500 text-white p-4 rounded text-lg font-semibold"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => handleClick("-")}
            className="bg-blue-600 hover:bg-blue-500 text-white p-4 rounded text-lg font-semibold"
          >
            -
          </button>

          <button
            onClick={() => handleClick(0)}
            className="col-span-2 bg-gray-600 hover:bg-gray-500 text-white p-4 rounded text-lg font-semibold"
          >
            0
          </button>
          <button
            onClick={handleEquals}
            className="bg-green-600 hover:bg-green-500 text-white p-4 rounded text-lg font-semibold"
          >
            =
          </button>
          <button
            onClick={() => handleClick("*")}
            className="bg-blue-600 hover:bg-blue-500 text-white p-4 rounded text-lg font-semibold"
          >
            ×
          </button>
          <button
            onClick={() => handleClick("/")}
            className="bg-blue-600 hover:bg-blue-500 text-white p-4 rounded text-lg font-semibold"
          >
            ÷
          </button>
        </div>
      </div>

      
      <div className="mt-10 text-center max-w-md">
        <h2 className="text-2xl font-semibold mb-3">📘 How to Use</h2>
        <p className="text-gray-300 mb-2">
          Click the number and operator buttons to perform calculations.
        </p>
        <p className="text-gray-300 mb-2">
          Press <span className="text-red-400 font-semibold">C</span> to clear
          the display.
        </p>
        <p className="text-gray-300">
          Supported operations: Addition (+), Subtraction (−), Multiplication
          (×), Division (÷).
        </p>
      </div>
    </div>
  );
}

export default App;
