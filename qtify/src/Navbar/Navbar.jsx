import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "/Users/gauravupadhyay/VS-code/Qtify/QTify/qtify/src/Assets/Logo.png";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
      <Button className="nav-btn">Give Feedback</Button>
    </nav>
  );
}

export default Navbar;
