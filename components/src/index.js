import React from "react";
import ReactDOM from "react-dom";
import Faker from "faker";
import CommentComp from "./CommentComp";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentComp />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
