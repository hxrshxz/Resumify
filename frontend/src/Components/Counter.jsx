import React from "react";
import useCounter from "../hooks/useCounter";

const Counter = () => {
  const [number, increment, decrement] = useCounter(0);

  return (
    <>
      <h1>Counter: {number}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

export default Counter;
