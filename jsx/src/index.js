// import react and react-dom

import React from "react";
import ReactDOM from "react-dom";

// create react component

const App = () => {
  const labelText = "Enter Name";

  return (
    <div>
      <label htmlFor="name">{labelText}</label>
      <input type="text" id="name" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        Submit
      </button>
    </div>
  );
};

// serve component to DOM
ReactDOM.render(<App />, document.querySelector("#root"));
