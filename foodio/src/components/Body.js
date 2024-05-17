import useSwiggyApi from "../Hooks/useSwiggyApi";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
function Body() {
  const apiData = useSwiggyApi();
  const resMenu =
    apiData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;
  const title = apiData?.data?.cards[2]?.card?.card?.title;
  return (
    <>
      <h2 className="text-2xl mr-[720px] ml-[78px] mt-[30px]">{title}</h2>
      <div className="flex flex-wrap -mx-[-60px] mt-[40px]">
        {resMenu &&
          resMenu.map((ele, index) => (
            <div key={ele.info.id} className="w-1/4 px-2 mb-[30px]">
              <Link key={ele.info.id} to={"/restaurantMenu/" + ele.info.id}>
                <RestaurantCard resData={ele.info} />
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}

export default Body;
