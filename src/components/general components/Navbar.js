import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isScrolled = scrollPosition > 100;
  return (
    <div
      className={`${styles.outerContainer} ${
        isScrolled ? styles.blue : undefined
      }`}
    >
      <nav
        className={`${styles.navContainer} ${
          isScrolled ? styles.blue : styles.white
        }`}
      >
        <h1>Out media</h1>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Gallery</li>
          <li>Blog</li>
          {/* <li>CONTACT US</li> */}
        </ul>
        {/* <ul>
        <li>
          <BsInstagram className={styles.socialMediaIcons} />
          <BsFacebook className={styles.socialMediaIcons} />
          <BsLinkedin className={styles.socialMediaIcons} />
        </li>
      </ul> */}
        <button>CONTACT US</button>
      </nav>
    </div>
  );
};

export default Navbar;
