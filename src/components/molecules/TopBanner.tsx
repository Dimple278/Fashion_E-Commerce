import React from "react";
import Image from "../atoms/Image";

const TopBanner: React.FC = () => {
  return (
    <div className="top-banner">
      <div className="top-banner__text-signup">
        <span className="top-banner__highlight">
          Get early access on launches and offers.
        </span>
        <div className="top-banner__signup">
          <a href="#" className="top-banner__link">
            Sign Up For Texts
          </a>
          <Image
            src="/ArrowRight.png"
            alt="Text Sign-Up"
            className="top-banner__icon"
          />
        </div>
      </div>

      <div className="top-banner__currency">
        <Image src="/flag.png" alt="Currency" className="top-banner__flag" />
        <span>USD</span>
      </div>
    </div>
  );
};

export default TopBanner;
