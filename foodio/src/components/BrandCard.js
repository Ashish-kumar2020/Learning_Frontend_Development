import React from "react";

function BrandCard({ brands }) {
  const { text } = brands;
  return (
    <div>
      <div className="w-[274px] h-[60px] border border-gray-300 pl-[14px] pt-[16px] rounded-[10px] cursor-pointer">
        {text.length <= 30 ? text : text.slice(0, 30) + "..."}
      </div>
    </div>
  );
}

export default BrandCard;
