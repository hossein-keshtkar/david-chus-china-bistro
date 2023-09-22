import React, { useState } from "react";

import styles from "../../styles/HomeLocation.module.css";
import Shimmer from "../Shimmer";
import { LAZY } from "../../constants/keywords";

const HomeLocation = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const handleOnLoad = () => {
    setTimeout(() => {
      setIsMapLoaded(true);
    }, 4000);
  };

  const style = {
    opacity: isMapLoaded ? 1 : 0,
  };

  return (
    <div
      className={`${styles.container} position-relative overflow-hidden rounded`}
    >
      <div className={`${styles.bg}`}></div>
      <iframe
        className={`${styles.map}`}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3084.675063579344!2d-76.71426302412522!3d39.36359441906242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c81a14e7817803%3A0xab20a0e99daa17ea!2sDavid%20Chu&#39;s%20China%20Bistro!5e0!3m2!1sen!2snl!4v1694054215589!5m2!1sen!2snl"
        title="google-map-david-chu\'s-china-bistro"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen={false}
        onLoad={handleOnLoad}
        loading={LAZY}
        style={style}
      ></iframe>

      {!isMapLoaded && <Shimmer />}
    </div>
  );
};

export default HomeLocation;
