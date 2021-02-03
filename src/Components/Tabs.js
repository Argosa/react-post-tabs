import React from "react";
import "./tabs.css";

const Tabs = (props) => {
  const handleClick = (e) => {
    props.setState(e.target.value);
  };

  return (
    <div className="tabs">
      <form>
        {props.tabList.map((tab, index) => (
          <button
            type="button"
            key={index}
            onClick={handleClick}
            value={tab[1]}
          >
            <b>{tab[0]}</b>
          </button>
        ))}
      </form>
    </div>
  );
};

export default Tabs;
