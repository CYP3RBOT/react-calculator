import React, { useState } from "react";

import Output from "./components/Output";
import Buttons from "./components/Buttons";

import "./styles/Calculator.css";

const Calculator: React.FC = () => {
  const [output, setOutput] = useState<string>("");

  return (
    <div className="calculator">
      <Output state={[output, setOutput]} />
      <Buttons state={[output, setOutput]} />
    </div>
  );
};

export default Calculator;
