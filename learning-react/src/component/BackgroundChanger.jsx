import "../style/bgChanger.css";
import { useState } from "react";

const BackgroundChanger = () => {
  const [bgColor, setBgColor] = useState("red");
  const handleButtonClick = (color) => {
    setBgColor(color);
  };
  return (
    <div className="container">
      <div className="bgchanger" style={{ backgroundColor: bgColor }}></div>
      <div className="footer">
        <button onClick={() => handleButtonClick("red")}>Red</button>
        <button onClick={() => handleButtonClick("blue")}>Blue</button>
        <button onClick={() => handleButtonClick("yellow")}>Yellow</button>
        <button onClick={() => handleButtonClick("green")}>Green</button>
        <button onClick={() => handleButtonClick("pink")}>Pink</button>
        <button onClick={() => handleButtonClick("white")}>White</button>
        <button onClick={() => handleButtonClick("black")}>Black</button>
      </div>
    </div>
  );
};

export default BackgroundChanger;
