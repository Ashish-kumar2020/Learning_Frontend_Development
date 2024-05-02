import React from "react";

function ExploreCard({ brands }) {
  const { text } = brands;
  return (
    <div>
      <div className="w-[600px] h-[60px] border border-gray-300 pl-[164px] pt-[16px] rounded-[10px] cursor-pointer">
        {text}
      </div>
    </div>
  );
}

export default ExploreCard;
