import React from "react";
import '../styles/Counter.css'

const Counter = ({ clicksNum }) => {
  return <div className="counter">{clicksNum}</div>;
};

export default Counter;
