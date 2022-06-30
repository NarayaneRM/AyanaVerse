import React from "react";
import "./ReportsBottom2.css";

function ReportsBottom2(props) {
  const { children } = props;

  return (
    <a href="#reports_page">
      <div className="reports_bottom-3">
        <div className="reports-3 spinnaker-normal-winter-wizard-12px">{children}</div>
      </div>
    </a>
  );
}

export default ReportsBottom2;
