import React from "react";
import styles from "../Hero/Hero.css";

function Hero() {
  
  return (
    <div className={styles.hero}>
      <div>
        <img className="image"
          src={require("../assets/Hero-image.png")}
          width={1212}
          alt="headphones"
        />
      </div>
    </div>
  );
}

export default Hero;
