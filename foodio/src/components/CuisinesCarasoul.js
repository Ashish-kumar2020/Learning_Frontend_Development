import React, { useState } from "react";
import useSwiggyApi from "../Hooks/useSwiggyApi";
import GreaterThan from "../assets/greater_then.png";
import LesserThan from "../assets/lesser_then.png";
function CuisinesCarasoul() {
  const apiData = useSwiggyApi();
  const headingCarousal = apiData?.data?.cards[0]?.card?.card?.header?.title;
  const carousalData =
    apiData?.data?.cards[0]?.card?.card?.imageGridCards?.info;

  const baseUrl =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_144,h_180/";

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextImage = () => {
    if (carousalData && currentIndex < carousalData.length) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevImage = () => {
    if (carousalData && currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="mt-[20px]">
      <div className="flex justify-around">
        <h2 className="text-2xl mr-[720px]">{headingCarousal}</h2>
        <div>
          <button onClick={handlePrevImage}>
            {" "}
            <img
              className="w-[27px] mt-[-32px]"
              src={LesserThan}
              alt="Lesser Than"
            />
          </button>
          <button
            onClick={handleNextImage}
            disabled={!carousalData || currentIndex === carousalData.length - 1}
          >
            <img className="w-[38px]" src={GreaterThan} alt="Greater Than" />
          </button>
        </div>
      </div>
      <div className="carousel flex justify-center">
        {carousalData &&
          carousalData.map((ele, index) => {
            const lastIndex = carousalData.length - 1;
            const isFirstVisible =
              index >= currentIndex && index < currentIndex + 6;
            const isLastVisible =
              currentIndex > lastIndex - 5 &&
              index >= lastIndex - 5 &&
              index <= lastIndex;

            return (
              <img
                className={`carousel-image ${
                  isFirstVisible || isLastVisible ? "visible" : "hidden"
                }`}
                key={ele.id}
                src={`${baseUrl}${ele.imageId}`}
                alt={ele.accessibility.altText}
                style={{
                  transition: "opacity 0.5s ease",
                  opacity: isFirstVisible || isLastVisible ? 1 : 0,
                }}
              />
            );
          })}
      </div>
      <hr className="w-[870px] ml-[270px] mt-[60px]" />
    </div>
  );
}

export default CuisinesCarasoul;
