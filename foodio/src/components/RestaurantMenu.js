import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RestaurantMenu() {
  const { resid } = useParams();
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5719972&lng=77.36936779999999&restaurantId=${resid}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`
    );
    const json = await data.json();
    setResInfo(json.data);
    console.log(json.data);
  };

  //   destructring resinfo
  if (resInfo === null) return;
  const {
    name,
    city,
    cuisines,
    areaName,
    sla,
    feeDetails,
    costForTwoMessage,
    avgRatingString,
  } = resInfo?.cards[2]?.card?.card?.info;

  let textWithoutTags = feeDetails
    ? feeDetails.message.replace(/<[^>]*>/g, "")
    : "";
  return (
    <div>
      <div className="topContainer rounded-[20px] p-[30px] ml-[300px] h-[220px] w-[670px] mt-[22px] mb-[20px] border border-gray-300">
        <h4 className="text-[26px] font-weight-500">{name}</h4>
        <div className="mt-[8px]">
          {avgRatingString <= 4 ? "🔴" : "🟢"} {avgRatingString} •{" "}
          {`(${costForTwoMessage})`}
        </div>
        <div className="mt-[8px]">{areaName}</div>
        <div className="mt-[8px]">{sla.slaString}</div>
        <div className="mt-[8px]">{textWithoutTags}</div>
      </div>
      <div></div>
    </div>
  );
}

export default RestaurantMenu;
