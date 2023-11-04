import React from "react";
import styles from "./HeroSection.module.css";
import img1 from "./../../assets/hero images/slider-image-1.jpg";
const HeroSection = () => {
  return (
    <div className={styles.heroSectionContainer}>
      <div className={styles.heroImages}>
        <img src={img1}></img>

        <div className={styles.heroText}>
          <h1>
            BUILD YOUR <br />
            BRAND IMAGE <br />
            WITH US.
          </h1>
          <button>
            <a href="#">OUR SERVICES</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
