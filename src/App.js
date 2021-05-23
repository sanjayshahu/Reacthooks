import React, { useCallback, useState, useMemo, useEffect } from "react";
import "./styles.css";
import Individual from "./individual";
export default function App() {
  const [number, setNumber] = useState(0);
  const [dark, setTheme] = useState(false);

  const slowfunction = (number) => {
    console.log("sf");
    for (let i = 0; i < 10; i++) {}
    return number * 2;
  };

  const doubleNumber = useMemo(() => {
    return slowfunction(number);
  }, [number]);

  const getNumbers = useCallback(() => {
    console.log("called");
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = useMemo(() => {
    return {
      color: dark ? "#ffffff" : "#000000",
      backgroundColor: dark ? "#000000" : "#ffffff"
    };
  }, [dark]);
  useEffect(() => {
    console.log("theme changed");
  }, [theme]);

  return (
    <div style={theme}>
      <h1>Hello CodeSandbox</h1>
      <label for="num">number</label>
      <input
        type="number"
        id="num"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      ></input>
      <span>double:{doubleNumber}</span>
      <Individual method={getNumbers}></Individual>
      <button onClick={() => setTheme(!dark)}>change Theme</button>
    </div>
  );
}
