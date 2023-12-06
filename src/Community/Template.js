import React from "react";
import "./Template.css";

const Template = ({ children, communityLength }) => {
  return (
    <div className="Template">
      <div className="title">커뮤니티 ({communityLength})</div>
      <div>{children}</div>
    </div>
  );
};

export default Template;
