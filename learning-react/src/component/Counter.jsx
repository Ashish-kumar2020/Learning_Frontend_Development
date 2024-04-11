import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      Counter
      <button
        onClick={() => {
          if (counter > 0) {
            setCounter(counter - 1);
          }
          console.log(counter);
        }}
      >
        Decrement
      </button>
      {counter}
      <button
        onClick={() => {
          setCounter(counter + 1);
          console.log(counter);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
