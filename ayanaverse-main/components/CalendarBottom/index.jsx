import React from "react";
import "./CalendarBottom.css";

function CalendarBottom(props) {
  const { className } = props;

  return (
    <a href="#calendar_page">
      <div className={`calendar_bottom ${className || ""}`}>
        <div className="calendar spinnaker-normal-winter-wizard-14px">CALENDAR</div>
      </div>
    </a>
  );
}

export default CalendarBottom;
