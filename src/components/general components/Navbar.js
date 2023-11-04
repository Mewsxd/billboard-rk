import React from "react";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={styles.navContainer}>
      <p>Out media</p>
      <ul>
        <li>Home</li>
        <li>Services</li>
        <li>Gallery</li>
        <li>Blog</li>
      </ul>
    </nav>
  );
};

export default Navbar;
