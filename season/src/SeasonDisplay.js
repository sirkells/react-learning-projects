import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  Summer: {
    text: "Beach Time",
    icon: "sun"
  },
  Winter: {
    text: "Chilli Man",
    icon: "snowflake"
  }
};

const seasonDis = (lat, month) => {
  if (month > 3 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};

const SeasonDisplay = props => {
  const season = seasonDis(props.lat, new Date().getMonth());
  // destructuring seasonConfig object
  const { text, icon } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${icon} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${icon} icon`} />
    </div>
  );
};

export default SeasonDisplay;
