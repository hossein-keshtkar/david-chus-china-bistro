import React, { useEffect, useRef, useState } from "react";
import { Container, Image } from "react-bootstrap";

import menuImg from "../../assets/images/menu-tile.jpg";
import blurredMenu from "../../assets/images/blurred-menu.png";
import specialsImg from "../../assets/images/specials-tile.jpg";
import styles from "../../styles/BottomSection.module.css";
import { Link } from "react-router-dom";

const HomePageBottomSection = () => {
  // const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isSpecialsVisible, setIsSpecialsVisible] = useState(false);
  const [isMapHovered, setIsMapHovered] = useState(false);

  const [isMenuImgLoaded, setIsMenuImgLoaded] = useState(false);

  const mapRef = useRef();
  const menuRef = useRef();

  const className =
    "col-lg-4 col-md-6 col-sm-6 col-12 mb-3 d-flex align-items-center justify-content-center";

  const handleMenuImg = () => {
    setIsMenuImgLoaded(menuRef.current.complete);
  };

  const menuStyle = {
    backgroundImage: `url(${blurredMenu})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "300px",
    height: "150px",
  };

  useEffect(() => {
    const menuEl = menuRef.current;

    if (menuEl) menuEl.addEventListener("load", handleMenuImg);

    return () => {
      if (menuEl) menuEl.removeEventListener("load", handleMenuImg);
    };
  }, []);

  // const mapLoadHandler = () => {
  //   setIsMapLoaded(true);
  // };

  // useEffect(() => {
  // mapRef.current
  // mapRef.onLoad = () => {
  //   setIsMapLoaded(true);
  // };
  // }, []);

  // useEffect(() => {
  //   console.log(isMapLoaded);
  // }, [isMapLoaded]);

  return (
    <Container className="my-5">
      <div className="row">
        <div className={className}>
          <Link to="/menu" className={styles.links}>
            <Image
              ref={menuRef}
              onMouseEnter={() => {
                setIsMenuVisible(true);
              }}
              onMouseLeave={() => {
                setIsMenuVisible(false);
              }}
              // src={menuImg}
              className={styles.images}
              loading="lazy"
              rounded
              style={menuStyle}
            />
            <h1
              className={styles.description}
              style={{
                opacity: isMenuVisible ? 1 : 0,
              }}
            >
              Menu
            </h1>
          </Link>
        </div>

        <div className={className}>
          <Link to="/menu/specials" className={styles.links}>
            <Image
              onMouseEnter={() => {
                setIsSpecialsVisible(true);
              }}
              onMouseLeave={() => {
                setIsSpecialsVisible(false);
              }}
              src={specialsImg}
              className={styles.images}
              loading="lazy"
              rounded
            />
            <h1
              className={styles.description}
              style={{
                opacity: isSpecialsVisible ? 1 : 0,
              }}
            >
              Specials
            </h1>
          </Link>
        </div>

        <div className="col-lg-4 col-md-12 mb-3">
          <div className="position-relative h-100 w-100 d-flex justify-content-center">
            <iframe
              allowFullScreen={false}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3084.675063579344!2d-76.71426302412522!3d39.36359441906242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c81a14e7817803%3A0xab20a0e99daa17ea!2sDavid%20Chu&#39;s%20China%20Bistro!5e0!3m2!1sen!2snl!4v1694054215589!5m2!1sen!2snl"
              ref={mapRef}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={`${styles.map} rounded`}
              onMouseEnter={() => {
                setIsMapHovered(true);
              }}
              onMouseLeave={() => {
                setIsMapHovered(false);
              }}
            ></iframe>
            <h1
              className={styles.description}
              style={{
                opacity: isMapHovered ? 1 : 0,
              }}
            >
              Location
            </h1>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HomePageBottomSection;
