import React from "react";

const CommentsComp = props => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={props.avatar} alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.name}
        </a>
        <div className="metadata">
          <span className="date">{props.timeAdded}</span>
        </div>
        <div className="text">{props.comments}</div>
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
