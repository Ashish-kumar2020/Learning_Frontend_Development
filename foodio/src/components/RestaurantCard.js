import React from "react";

function RestaurantCard({ resData }) {
  const { name, cloudinaryImageId, cuisines, avgRating, areaName } = resData;
  const { slaString } = resData.sla;
  console.log("resData", resData);
  const baseUrl =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_273,h_182/";
  return (
    <>
      {/* <div>{title}</div> */}
      <div className="mr-[25px]">
        <img
          src={`${baseUrl}` + cloudinaryImageId}
          alt="img"
          className="rounded-[26px] ml-[20px]"
        />
        <h2 className="ml-[37px] mt-[7px] text-[17px] font-bold">{name}</h2>
        <h2 className="ml-[37px] text-[17px] font-custom">
          ❇️ {avgRating} • {slaString}
        </h2>
        <h2 className="ml-[37px] text-gray-600">
          {cuisines.slice(0, 3).join(",")}
        </h2>
        <h2 className="ml-[37px] text-gray-600">{areaName}</h2>
      </div>
    </>
  );
}

export default RestaurantCard;
