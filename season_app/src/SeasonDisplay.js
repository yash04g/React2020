import './SeasonDisplay.css';
import React from "react";


const seasonConfig = {
  summer: {
    text: "Let's hit the beach!!",
    iconName: "sun",
  },
  winter: {
    text: "Burr its chilly!!",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    if (lat > 0) {
      return "summer";
    } else {
      return "winter";
    }
  } else {
    if (lat > 0) {
      return "winter";
    } else {
      return "summer";
    }
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  return (
    <div className = {`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h2> {text}</h2>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
