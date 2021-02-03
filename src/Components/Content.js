import React from "react";
import "./content.css";

const Content = (props) => {
  return <div className="content">{props.currentState[1]}</div>;
};

export default Content;
