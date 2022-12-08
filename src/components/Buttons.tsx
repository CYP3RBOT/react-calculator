import React from "react";
import "../styles/Buttons.css";

type ButtonsProps = {
  state: [string, React.Dispatch<React.SetStateAction<string>>];
};

const Buttons: React.FC<ButtonsProps> = ({ state }) => {
  const [output, setOutput] = state;

  const handleOperation = (operation: string) => {
    if (operation === "AC") {
      setOutput("");
    } else if (operation === "+/-") {
      try {
        setOutput((eval(output) * -1).toString());
      } catch (error) {
        setOutput("Error");
      }
    } else if (operation === "%") {
      try {
        setOutput((eval(output) * 0.01).toString());
      } catch (error) {
        setOutput("Error");
      }
    } else if (operation === "÷") {
      setOutput(output + "/");
    } else if (operation === "×") {
      setOutput(output + "*");
    } else if (operation === "-") {
      setOutput(output + "-");
    } else if (operation === "+") {
      setOutput(output + "+");
    } else if (operation === "=") {
      try {
        setOutput(eval(output).toString());
      } catch (error) {
        setOutput("Error");
      }
    }
  };

  return (
    <div className="buttons">
      <button
        className="button span-one gray-button"
        onClick={() => setOutput("")}
      >
        AC
      </button>
      <button
        className="button span-one gray-button"
        onClick={() => handleOperation("+/-")}
      >
        +/-
      </button>
      <button
        className="button span-one gray-button"
        onClick={() => handleOperation("%")}
      >
        %
      </button>
      <button
        className="button span-one side-button"
        onClick={() => handleOperation("÷")}
      >
        ÷
      </button>

      <button
        className="button span-one"
        onClick={() => setOutput(output + "7")}
      >
        7
      </button>
      <button
        className="button span-one"
        onClick={() => setOutput(output + "8")}
      >
        8
      </button>
      <button
        className="button span-one"
        onClick={() => setOutput(output + "9")}
      >
        9
      </button>
      <button
        className="button span-one side-button"
        onClick={() => handleOperation("×")}
      >
        ×
      </button>

      <button
        className="button span-one"
        onClick={() => setOutput(output + "4")}
      >
        4
      </button>
      <button
        className="button span-one"
        onClick={() => setOutput(output + "5")}
      >
        5
      </button>
      <button
        className="button span-one"
        onClick={() => setOutput(output + "6")}
      >
        6
      </button>
      <button
        className="button span-one side-button"
        onClick={() => handleOperation("-")}
      >
        -
      </button>

      <button
        className="button span-one"
        onClick={() => setOutput(output + "1")}
      >
        1
      </button>
      <button
        className="button span-one"
        onClick={() => setOutput(output + "2")}
      >
        2
      </button>
      <button
        className="button span-one"
        onClick={() => setOutput(output + "3")}
      >
        3
      </button>
      <button
        className="button span-one side-button"
        onClick={() => handleOperation("+")}
      >
        +
      </button>

      <button className="button span-two">0</button>
      <button
        className="button span-one"
        onClick={() => setOutput(output + ".")}
      >
        .
      </button>
      <button
        className="button span-one side-button"
        onClick={() => handleOperation("=")}
      >
        =
      </button>
    </div>
  );
};

export default Buttons;
