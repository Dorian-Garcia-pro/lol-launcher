import React from "react";
import bug from "../assets/bug.png";
import bubble from "../assets/bubble.png";
import mic from "../assets/mic.png";
import scroll from "../assets/scroll.png";

const SocialsFooter = () => {
  return (
    <div id="footerSocial">
      <div>
        <img src={bubble} alt="bubble" />
      </div>
      <div>
        <img src={scroll} alt="scroll" />
      </div>
      <div className="disabledMic">
        <img src={mic} alt="mic" />
      </div>
      <div className="greyed">
        <p>V10.91</p>
      </div>
      <div>
        <img src={bug} alt="bug" />
      </div>
    </div>
  );
};

export default SocialsFooter;
