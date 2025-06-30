import React, { useState } from "react";
import {
  counterSlice,
  reset,
  decrement,
  increment,
  incrementByAmount,
} from "../features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const [amount, setAmount] = useState(0);
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

  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(amount));
  };

  return (
    <div>
      <div>Counter: {count}</div>
      <button onClick={handleIncrement}> increment</button>
      <button onClick={handleReset}> reset</button>
      <button onClick={handleDecrement}> decrement</button>
      <input
        type="number"
        placeholder="enter amount to increment"
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleIncrementByAmount}>Inc By Amount</button>
    </div>
  );
};

export default Counter;
