import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black py-6 text-gray-400 text-sm">
      <p className="mb-4 text-center">
        Questions? Call{" "}
        <a href="tel:000-000-0000" className="hover:underline">
          000-000-0000
        </a>
      </p>
      <ul className="flex justify-center space-x-4">
        <li>
          <a href="#" className="hover:underline">
            FAQ
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Help Center
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Terms of Use
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Privacy
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
