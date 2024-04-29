import React, { useState } from "react";
import GreaterThan from "../assets/greater_then.png";
import LesserThan from "../assets/lesser_then.png";
import Logo_1 from "../assets/images_1.jpeg";
import Cart_1 from "../assets/Cart_1.png";
import Help_1 from "../assets/Help_1.png";
import Offer_1 from "../assets/Offer_1.png";
import Search_1 from "../assets/Search_1.png";
import Sigin_1 from "../assets/Sigin_1.png";
function CuisinesCarasoul() {
  const images = [Logo_1, Cart_1, Help_1, Offer_1, Search_1, Sigin_1];
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div>
      <button onClick={handlePrevImage}>
        <img
          className="w-[26px] mt-[-31px]"
          src={LesserThan}
          alt="Lesser Than"
        />
      </button>
      <img
        className="w-[26px]"
        src={images[currentImage]}
        alt={`Slide ${currentImage}`}
      />
      <button onClick={handleNextImage}>
        <img className="w-[38px]" src={GreaterThan} alt="Greater Than" />
      </button>
    </div>
  );
}

export default CuisinesCarasoul;
