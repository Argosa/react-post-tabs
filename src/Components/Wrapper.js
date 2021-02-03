import React, { useState } from "react";
import Tabs from "./Tabs";
import Content from "./Content";
import "./Wrapper.css";

const Header = () => {
  return (
    <div className="heading">
      <h1 className="title">Tabs</h1>
    </div>
  );
};

const Wrapper = () => {
  const tabs = [
    ["Tab One", "Tab One Content"],
    ["Tab Two", "Tab Two Content"]
  ];

  const [state, setState] = useState(tabs[0]);

  return (
    <div className="wrapper">
      <Header />
      <Tabs tabList={tabs} setState={setState} />
      <Content tabList={tabs} currentState={state} />
    </div>
  );
};

export default Wrapper;
