import React from "react";
import ReactDOM from "react-dom";
import Faker from "faker";
import CommentComp from "./CommentComp";
import Permit from "./Permit";

const App = () => {
  return (
    <div className="ui container comments">
      <Permit>
        <CommentComp
          name="Kells"
          timeAdded="Today at 6:00PM"
          avatar={Faker.image.avatar()}
          comments="Nice Blog Post"
        />
      </Permit>
      <Permit>
        <CommentComp
          name="James"
          timeAdded="Today at 5:20PM"
          avatar={Faker.image.avatar()}
          comments="Amazing post, would love more"
        />
      </Permit>
      <Permit>
        <CommentComp
          name="Tony"
          timeAdded="Yesterday at 3:00PM"
          avatar={Faker.image.avatar()}
          comments="This will be great for business reports. I will definitely download
            this."
        />
      </Permit>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
