import React from "react";
import ReactDOM from "react-dom";
import Faker from "faker";
import CommentComp from "./CommentComp";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentComp
        name="Kells"
        timeAdded="Today at 6:00PM"
        avatar={Faker.image.avatar()}
        comments="Nice Blog Post"
      />
      <CommentComp
        name="James"
        timeAdded="Today at 5:20PM"
        avatar={Faker.image.avatar()}
        comments="Amazing post, would love more"
      />
      <CommentComp
        name="Tony"
        timeAdded="Yesterday at 3:00PM"
        avatar={Faker.image.avatar()}
        comments="This will be great for business reports. I will definitely download
        this."
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
