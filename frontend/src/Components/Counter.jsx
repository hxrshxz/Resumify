import React from "react";
import {
  counterSlice,
  decrement,
  increment,
} from "../features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div>
      <div>Counter: {count}</div>
      <button onClick={handleIncrement}> increment</button>
      <button onClick={handleReset}> reset</button>
      <button onClick={handleDecrement}> decrement</button>
    </div>
  );
};

export default Counter;
