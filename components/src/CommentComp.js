import React from "react";
import Faker from "faker";

const CommentsComp = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={Faker.image.avatar()} alt="avatar" />
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
  );
};

export default CommentsComp;
