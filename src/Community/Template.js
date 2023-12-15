import React from "react";
import "./Template.css";

const Template = ({ children, communityLength, size }) => {
  return (
    <div className="Template">
      <div className="title" style={{ width: size ? '20%' : '90vw' }}>커뮤니티 ({communityLength})</div>
      <div>{children}</div>
    </div>
  );
};

export default Template;
