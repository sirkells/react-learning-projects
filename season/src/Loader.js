import React from "react";

const Loader = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui text loader">{props.message}</div>
    </div>
  );
};

export default Loader;

// default message when props not given by the parent
Loader.defaultProps = {
  message: "Loading...."
};
