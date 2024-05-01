import React, { useState } from "react";
import useSwiggyApi from "../Hooks/useSwiggyApi";
import RestaurantCard from "./RestaurantCard";
import GreaterThan from "../assets/greater_then.png";
import LesserThan from "../assets/lesser_then.png";

function RestaurantChain() {
  const apiData = useSwiggyApi();
  const title = apiData?.data?.cards[1]?.card?.card?.header?.title;
  const chainData =
    apiData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextImage = () => {
    if (chainData) {
      setCurrentIndex((prevIndex) =>
        prevIndex === chainData.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const handlePrevImage = () => {
    if (chainData && currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="mt-[20px]">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl ml-[104px]">{title}</h2>
        <div className="mr-[110px]">
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
            disabled={!chainData || currentIndex === chainData.length - 1}
          >
            <img className="w-[38px]" src={GreaterThan} alt="Greater Than" />
          </button>
        </div>
      </div>
      <div className="carousel flex justify-center">
        {chainData &&
          chainData
            .slice(currentIndex, currentIndex + 4)
            .map((ele, index) => (
              <RestaurantCard key={ele.info.id} resData={ele.info} />
            ))}
      </div>
      <hr className="w-[870px] ml-[270px] mt-[60px]" />
    </div>
  );
}

export default RestaurantChain;
