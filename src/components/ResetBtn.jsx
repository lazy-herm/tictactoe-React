import React, {useState} from "react";

const ResetBtn = ({resetGame}) => {
  // Button visibility
  const [visible, setVisible] = useState("hidden");
  const btnClick = () => {
    setVisible("");
    resetGame();
  }

  return (
    <div className={`buttonContainer ${visible}`}>
      <button onClick={btnClick} className="resetButton">
        Reset Game
      </button>
    </div>
  );
};

export default ResetBtn;
