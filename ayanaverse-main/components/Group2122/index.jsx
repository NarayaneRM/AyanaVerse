import React from "react";
import Month2 from "../Month2";
import "./Group2122.css";

function Group2122(props) {
  const { event_Number, event_Title, className, month2Props } = props;

  return (
    <div className={`group-2 ${className || ""}`}>
      <Month2>{month2Props.children}</Month2>
      <div className="event_card_2">
        <div className="event_-container border-1px-onahau">
          <div className="event_number-2 spinnaker-normal-white-14px">{event_Number}</div>
          <div className="event_title spinnaker-normal-onahau-9px">{event_Title}</div>
        </div>
      </div>
    </div>
  );
}

export default Group2122;
