import React from "react";
import "./NftViewBottom2.css";

function NftViewBottom2(props) {
  const { children } = props;

  return (
    <a href="#nftview_page">
      <div className="nft_view_bottom-3">
        <div className="nft_view-3 spinnaker-normal-winter-wizard-12px">{children}</div>
      </div>
    </a>
  );
}

export default NftViewBottom2;
