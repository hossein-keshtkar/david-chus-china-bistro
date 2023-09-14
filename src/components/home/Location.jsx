import React, { useState, useRef } from "react";

import styles from "../../styles/Location.module.css";

const Location = () => {
  const [isMapHovered, setIsMapHovered] = useState(false);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const mapRef = useRef();

  return (
    <div className="position-relative h-100 w-100 d-flex flex-column justify-content-center">
      <iframe
        className={`${styles.map} rounded`}
        allowFullScreen={false}
        title="google-map-david-chu\'s-china-bistro"
        onLoad={() => {
          setIsMapLoaded(true);
        }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3084.675063579344!2d-76.71426302412522!3d39.36359441906242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c81a14e7817803%3A0xab20a0e99daa17ea!2sDavid%20Chu&#39;s%20China%20Bistro!5e0!3m2!1sen!2snl!4v1694054215589!5m2!1sen!2snl"
        ref={mapRef}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onMouseEnter={() => {
          setIsMapHovered(true);
        }}
        onMouseLeave={() => {
          setIsMapHovered(false);
        }}
      ></iframe>
      {!isMapLoaded && <div className={styles.shimmer}></div>}
      <h1
        className={`${styles.description} d-none d-lg-block`}
        style={{
          opacity: isMapHovered ? 1 : 0,
        }}
      >
        Location
      </h1>
    </div>
  );
};

export default Location;
