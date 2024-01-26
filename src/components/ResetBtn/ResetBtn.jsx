import React from "react";
import styles from "./ResetBtn.module.css";

const ResetBtn = ({ resetGame, buttonShow }) => {
  // Hide reset button and reset game state
  const btnClick = () => {
    resetGame();
  };

  return (
    <div className={`${styles.btn_container} ${buttonShow && styles.show} ${!buttonShow && styles.hidden} `}>
      <button onClick={btnClick} className={styles.reset_btn}>
        Reset Game
      </button>
    </div>
  );
};

export default ResetBtn;
