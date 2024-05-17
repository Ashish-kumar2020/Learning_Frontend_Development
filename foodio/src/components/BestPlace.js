import useSwiggyApi from "../Hooks/useSwiggyApi";
import BrandCard from "./BrandCard";

function BestPlace() {
  const apiData = useSwiggyApi();
  const brands = apiData?.data?.cards[6]?.card?.card?.brands;
  const title = apiData?.data?.cards[6]?.card?.card?.title;
  return (
    <>
      <h2 className="text-2xl mr-[720px] ml-[78px] mt-[30px]">{title}</h2>
      <div className="flex flex-wrap justify-evenly ml-[16px] mt-[30px]">
        {brands &&
          brands.map((ele, index) => (
            <div key={index} className="w-1/3.5 px-2 mb-[30px]">
              <BrandCard brands={ele} />
            </div>
          ))}
      </div>
    </>
  );
}

export default BestPlace;
