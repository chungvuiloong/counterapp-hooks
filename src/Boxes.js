import './App.css';
import React from "react";

// const [count, setCount] = useState(0);

// let incrementCount = () => {
//   setCount(count + 1);
// };

// let decrementCount = () => {
//   setCount(count - 1);
// };

const AddFive = () => {
    return(
        <div className="boxes-container">
            <button type="button" className="button">Add five</button>
        </div>
    );

};

 const AddOne = () => {
    return(
        <div className="boxes-container">
            <button type="button" className="button">Add one</button>
        </div>
    );

};

 const Reset = () => {
    return(
        <div className="boxes-container">
            <button type="button" className="button">Reset</button>
        </div>
    );

};

 const RemoveOne = () => {
    return(
        <div className="boxes-container">
            <button type="button" className="button">Remove one</button>
        </div>
    );

};

 const RemoveFive = () => {
    return(
        <div className="boxes-container">
            <button type="button" className="button">Remove five</button>
        </div>
    );

};