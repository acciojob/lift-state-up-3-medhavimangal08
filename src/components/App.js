import React, { useState } from "react";
import "./../styles/App.css";
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

const App = () => {
  let [selectedOption, setselectedOption] = useState(null);
  return (
    <div
      style={{ backgroundColor: "green", height: "400px" }}
      className="parent"
    >
      <h1>Parent Component</h1>

      <ChildComponent1
        text="Child Component1"
        button="Option 1"
        setselectedOption={setselectedOption}
      ></ChildComponent1>

      <ChildComponent2
        text="Child Component1"
        button="Option 2"
        setselectedOption={setselectedOption}
      ></ChildComponent2>
      <p>Selected Option : {selectedOption}</p>
    </div>
  );
};

export default App;
