import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="w-full bg-black py-6 text-gray-400 text-sm">
      <p className="mb-4 text-center">
        Questions? Call{" "}
        <Link to="tel:000-000-0000" className="hover:underline">
          000-000-0000
        </Link>
      </p>
      <ul className="flex justify-center space-x-4">
        <li>
          <Link to="/" className="hover:underline">
            FAQ
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:underline">
            Help Center
          </Link>
        </li>
        <li>
          <Link to="#" className="hover:underline">
            Terms of Use
          </Link>
        </li>
        <li>
          <Link to="#" className="hover:underline">
            Privacy
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
