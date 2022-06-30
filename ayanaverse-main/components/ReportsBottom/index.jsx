import React from "react";
import "./ReportsBottom.css";

function ReportsBottom(props) {
  const { className } = props;

  return (
    <a href="#reports_page">
      <div className={`reports_bottom ${className || ""}`}>
        <div className="reports spinnaker-normal-winter-wizard-14px">REPORTS</div>
      </div>
    </a>
  );
}

export default ReportsBottom;
