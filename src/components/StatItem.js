import React from "react";
import Wrapper from "../assets/wrappers/StatItem";

const StatItem = ({ title, count, color, bcg, icon }) => {
  return (
    <Wrapper color={color} bcg={bcg}>
      <header>
        <span className="count">{count}</span>
        <span className="icon">{icon}</span>
      </header>
      <h5 className="title">{title}</h5>
    </Wrapper>
  );
};

export default StatItem;
