import React from "react";

const ChildComponent1 = ({ text, button, setselectedOption }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        backgroundColor: "darkorange",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h1>{text}</h1>
      <button onClick={(e) => setselectedOption(e.target.innerText)}>
        {button}
      </button>
    </div>
  );
};

export default ChildComponent1;
