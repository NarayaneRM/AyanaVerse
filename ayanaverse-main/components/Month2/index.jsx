import React from "react";
import "./Month2.css";

function Month2(props) {
  const { children } = props;

  return (
    <div className="month_2">
      <div className="overlap-group1-3 border-1px-white">
        <div className="month_name spinnaker-normal-white-9px">{children}</div>
      </div>
    </div>
  );
}

export default Month2;
