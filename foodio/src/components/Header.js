import React from "react";
import Logo from "../assets/images.jpeg";
import Cart from "../assets/Cart.png";
import Help from "../assets/Help.png";
import Offer from "../assets/Offer.png";
import Search from "../assets/Search.png";
import Sigin from "../assets/Sigin.png";
function Header() {
  return (
    <div className="flex justify-between items-center h-[100px] shadow-lg">
      {/* logo */}
      <div>
        <img className="w-[140px] ml-[40px]" src={Logo} alt="comapny logo" />
      </div>

      {/* List Items */}
      <div>
        <ul className="flex">
          <img className="w-[30px] mr-[12px]" src={Search} alt="Search-icon" />
          <li className="mr-[90px] cursor-pointer hover:text-orange-700  font-bold mt-[3px]">
            Search
          </li>
          <img className="w-[30px] mr-[12px]" src={Offer} alt="Offer-icon" />
          <li className="mr-[90px] cursor-pointer hover:text-orange-700  font-bold mt-[3px]">
            Offers
          </li>
          <img className="w-[30px] mr-[12px]" src={Help} alt="Help-icon" />
          <li className="mr-[90px] cursor-pointer hover:text-orange-700 font-bold mt-[3px]">
            Help
          </li>
          <img className="w-[30px] mr-[12px]" src={Sigin} alt="Signin-icon" />
          <li className="mr-[90px] cursor-pointer hover:text-orange-700 font-bold mt-[3px]">
            SignIn
          </li>
          <img className="w-[30px] mr-[12px]" src={Cart} alt="Cart-icon" />
          <li className="mr-[90px] cursor-pointer hover:text-orange-700 font-bold mt-[3px]">
            Cart
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
