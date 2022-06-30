import React from "react";
import "./Group12.css";

function Group12(props) {
  const { className } = props;

  return (
    <a href="#projects_page">
      <div className={`group-12 ${className || ""}`}>
        <div className="dao_blockchain_projects-9 spinnaker-normal-white-20px"> GET STARTED</div>
        <img className="arrow-1" src="/img/arrow-1@2x.svg" />
      </div>
    </a>
  );
}

export default Group12;
