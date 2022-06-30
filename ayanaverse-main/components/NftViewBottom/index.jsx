import React from "react";
import "./NftViewBottom.css";

function NftViewBottom(props) {
  const { className } = props;

  return (
    <a href="#nftview_page">
      <div className={`nft_view_bottom ${className || ""}`}>
        <div className="nft_view spinnaker-normal-winter-wizard-14px">NFT VIEW</div>
      </div>
    </a>
  );
}

export default NftViewBottom;
