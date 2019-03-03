import React from "react";
import ReactDOM from "react-dom";
import Faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img src="" />
        </a>
        <div className="content">
          <a href="/" className="author">
            Tom Lukic
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00PM</span>
          </div>
          <div className="text">
            This will be great for business reports. I will definitely download
            this.
          </div>
          <div className="actions">
            <a href="/" className="reply">
              Reply
            </a>
            <a href="/" className="save">
              Save
            </a>
            <a href="/" className="hide">
              Hide
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
