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
    costForTwoMessages,
    avgRatingString,
  } = resInfo?.cards[2]?.card?.card?.info;
  console.log(
    name,
    city,
    cuisines,
    areaName,
    sla.slaString,
    feeDetails.message,
    costForTwoMessages,
    avgRatingString
  );

  return <div>RestaurantMenu</div>;
}

export default RestaurantMenu;
