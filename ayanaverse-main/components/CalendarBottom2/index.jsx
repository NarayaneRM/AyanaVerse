import React from "react";
import "./CalendarBottom2.css";

function CalendarBottom2(props) {
  const { children } = props;

  return (
    <a href="#calendar_page">
      <div className="calendar_bottom-3">
        <div className="calendar-3 spinnaker-normal-winter-wizard-12px">{children}</div>
      </div>
    </a>
  );
}

export default CalendarBottom2;
