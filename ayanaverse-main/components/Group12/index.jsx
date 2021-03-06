import React from "react";
import "./Group12.css";

function Group12(props) {
  const { arrow1, className } = props;

  return (
    <a href="#projects_page">
      <div className={`group-12 ${className || ""}`}>
        <div className="dao_blockchain_projects-9 spinnaker-normal-white-20px"> GET STARTED</div>
        <img className="arrow-1" src={arrow1} />
      </div>
    </a>
  );
}

export default Group12;
