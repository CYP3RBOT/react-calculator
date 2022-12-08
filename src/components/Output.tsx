import React from "react";

import "../styles/Output.css";

type ButtonsProps = {
  state: [string, React.Dispatch<React.SetStateAction<string>>];
};

const Output: React.FC<ButtonsProps> = ({ state }) => {
  const [output, setOutput] = state;

  return (
    <div className="output-container">
      <span className="output">{output}</span>
    </div>
  );
};

export default Output;
