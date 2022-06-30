import React from "react";
import "./Group21.css";

function Group21(props) {
  const { className } = props;

  return (
    <div className={`group-5 ${className || ""}`}>
      <div className="month_2">
        <div className="overlap-group1 border-1px-white">
          <div className="month_name spinnaker-normal-white-9px">JUNE</div>
        </div>
      </div>
      <div className="event_card_2">
        <div className="event_-container border-1px-onahau">
          <div className="event_number spinnaker-normal-white-14px">PROJECT #01</div>
          <p className="event_title spinnaker-normal-onahau-9px">NFT SMART CONTRACT ON ETHEREUM</p>
          <div className="event_link spinnaker-normal-onahau-9px">LINK</div>
        </div>
      </div>
    </div>
  );
}

export default Group21;
