import React, { useState } from "react";

import "../../App.css";
import Button from "./Button";
import Count from "./Count";
const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const handleCount = (value: number) => {
    setCount(count + value);
  };
  return (
    <div className="counter" >
      <h2>Counter</h2>
      <Count count={count} />
      <Button label="Increment" handleCount={() => handleCount(1)} />
      <Button label="Decrement" handleCount={() => handleCount(-1)} />
    </div>
  );
};

export default Counter;
