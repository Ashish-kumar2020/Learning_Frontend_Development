import React from "react";
import useSwiggyApi from "../Hooks/useSwiggyApi";

import ExploreCard from "./ExploreCard";

function Explore() {
  const apiData = useSwiggyApi();
  const brands = apiData?.data?.cards[8]?.card?.card?.brands;
  const title = apiData?.data?.cards[8]?.card?.card?.title;
  return (
    <>
      <h2 className="text-2xl mr-[720px] ml-[78px] mt-[30px]">{title}</h2>
      <div className="flex flex-wrap justify-evenly ml-[16px] mt-[30px]">
        {brands &&
          brands.map((ele, index) => (
            <div key={index} className="w-7/16 px-2 mb-[30px] ">
              <ExploreCard brands={ele} />
            </div>
          ))}
      </div>
    </>
  );
}

export default Explore;
