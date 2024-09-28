import React from "react";

const Notification = ({ message }) => {
  return (
    <div className="bg-gray-800 w-[320px] h-[60px] border border-red-500 rounded-lg shadow-md flex items-center justify-center">
      <span className="text-white font-semibold text-lg text-center">
        {message}
      </span>
    </div>
  );
};

export default Notification;
