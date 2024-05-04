import React from "react";
import Logo from "../assets/images.jpeg";
import Cart from "../assets/Cart.png";
import Help from "../assets/Help.png";
import Offer from "../assets/Offer.png";
import Search from "../assets/Search.png";
import Sigin from "../assets/Sigin.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between items-center h-[100px] shadow-lg">
      {/* logo */}
      <div>
        <Link to="/">
          <img className="w-[140px] ml-[40px]" src={Logo} alt="company logo" />
        </Link>
      </div>

      {/* List Items */}
      <div>
        <ul className="flex">
          <Link to="/search">
            <li className="mr-[90px] cursor-pointer hover:text-orange-700 font-bold">
              <img
                className="w-[26px] mr-[12px]"
                src={Search}
                alt="Search-icon"
              />
              Search
            </li>
          </Link>
          <Link to="/offer">
            <li className="mr-[90px] cursor-pointer hover:text-orange-700 font-bold">
              <img
                className="w-[26px] mr-[12px]"
                src={Offer}
                alt="Offer-icon"
              />
              Offers
            </li>
          </Link>
          <Link to="/help">
            <li className="mr-[90px] cursor-pointer hover:text-orange-700 font-bold">
              <img className="w-[26px] mr-[12px]" src={Help} alt="Help-icon" />
              Help
            </li>
          </Link>
          <Link to="/auth">
            <li className="mr-[90px] cursor-pointer hover:text-orange-700 font-bold">
              <img
                className="w-[26px] mr-[12px]"
                src={Sigin}
                alt="Signin-icon"
              />
              SignIn
            </li>
          </Link>
          <Link to="/cart">
            <li className="mr-[90px] cursor-pointer hover:text-orange-700 font-bold">
              <img className="w-[26px] mr-[12px]" src={Cart} alt="Cart-icon" />
              Cart
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
