import './App.css';
import React, { useState } from "react";

const Main = () => {
    const [count, setCount] = useState(0);


    let incrementCountFive = () => {
        setCount(count + 5);
      };

  let incrementCount = () => {
    setCount(count + 1);
  };

  let reset = () => {
    setCount(0);
  };

  let decrementCount = () => {
    setCount(count - 1);
  };

  let decrementCountFive = () => {
    setCount(count - 5);
  };

  





    return (
        <div>
            <div className="circle">
                <div className = "current-sum">{count}</div>
            </div>

            <button type="button" className="button" onClick={incrementCountFive}>Add five</button>
            <button type="button" className="button" onClick={incrementCount}>Add one</button>
            <button type="button" className="button" onClick={reset}>Reset</button>
            <button type="button" className="button" onClick={decrementCount}>Remove one</button>
            <button type="button" className="button" onClick={decrementCountFive}>Remove five</button>

        </div>

        





    );
};

export default Main;