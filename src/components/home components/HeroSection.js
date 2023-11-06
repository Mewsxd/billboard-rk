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
        {/* <div className={styles.attentionSection}>
          <div className={styles.leftPart}>
            <h2>
              WE CREATE MASS <br />
              PUBLIC'S EYE
              <br />
              <span>ATTENTION</span>
            </h2>

            <button>
              <a href="#">WHO WE ARE</a>
            </button>
          </div>
          <div className={styles.rightPart}>
            <p>
              We are a value-driven organization. Our core values inspire us to
              push our boundaries and set benchmarks for others
            </p>
          </div>
        </div> */}
      </div>
      <div className={styles.attentionSection}>
        <div className={styles.leftPart}>
          <h2>
            WE CREATE MASS <br />
            PUBLIC'S EYE
            <br />
            <span>ATTENTION</span>
          </h2>

          <button>
            <a href="#">WHO WE ARE</a>
          </button>
        </div>
        <div className={styles.rightPart}>
          <p>
            We are a value-driven organization. Our core values inspire us to
            push our boundaries and set benchmarks for others
          </p>
        </div>
      </div>
      {/* <div className={styles.test}></div> */}
    </div>
  );
};

export default HeroSection;
