<<<<<<< HEAD
import React, { useState, useEffect } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => setInput((prev) => prev + value);
  const handleClear = () => setInput("");
  const handleCalculate = () => {
    try {
      const result = eval(input);
      if (!isFinite(result)) throw new Error("Divide by zero");
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (/[0-9+\-*/.]/.test(e.key)) setInput((prev) => prev + e.key);
      if (e.key === "Enter") handleCalculate();
      if (e.key === "Escape") handleClear();
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [input]);

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-80 mb-6">
      <div className="text-right mb-4 p-3 bg-gray-700 text-white rounded">
        {input || "0"}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {["7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+"].map((btn) => (
          <button
            key={btn}
            onClick={() => (btn === "=" ? handleCalculate() : handleClick(btn))}
            className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition-transform transform hover:scale-105"
          >
            {btn}
          </button>
        ))}
        <button
          onClick={handleClear}
          className="col-span-4 bg-red-500 text-white p-3 rounded hover:bg-red-600 transition-transform transform hover:scale-105"
        >
          Clear
        </button>
      </div>
    </div>
  );
}
=======
import React, { useState, useEffect } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => setInput((prev) => prev + value);
  const handleClear = () => setInput("");
  const handleCalculate = () => {
    try {
      const result = eval(input);
      if (!isFinite(result)) throw new Error("Divide by zero");
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (/[0-9+\-*/.]/.test(e.key)) setInput((prev) => prev + e.key);
      if (e.key === "Enter") handleCalculate();
      if (e.key === "Escape") handleClear();
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [input]);

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-80 mb-6">
      <div className="text-right mb-4 p-3 bg-gray-700 text-white rounded">
        {input || "0"}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {["7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+"].map((btn) => (
          <button
            key={btn}
            onClick={() => (btn === "=" ? handleCalculate() : handleClick(btn))}
            className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition-transform transform hover:scale-105"
          >
            {btn}
          </button>
        ))}
        <button
          onClick={handleClear}
          className="col-span-4 bg-red-500 text-white p-3 rounded hover:bg-red-600 transition-transform transform hover:scale-105"
        >
          Clear
        </button>
      </div>
    </div>
  );
}
>>>>>>> 0d206ecf43e567c8c92abbff89a4c0fed4f11c08
