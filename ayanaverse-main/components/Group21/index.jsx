import React from "react";
import Month2 from "../Month2";
import "./Group21.css";

function Group21(props) {
  const { className, month2Props } = props;

  return (
    <div className={`group-21 ${className || ""}`}>
      <Month2>{month2Props.children}</Month2>
      <div className="event_card_2-1">
        <div className="event_-container-1 border-1px-onahau">
          <div className="event_number spinnaker-normal-white-14px">PROJECT #01</div>
          <p className="event_title-1 spinnaker-normal-onahau-9px">NFT SMART CONTRACT ON ETHEREUM</p>
          <div className="event_link spinnaker-normal-onahau-9px">LINK</div>
        </div>
      </div>
    </div>
  );
}

export default Group21;
