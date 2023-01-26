import React from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/investorInfoLogo2.png";

export default function Header() {
  return (
    <header className="relative h-auto w-full p-2 bg-[#003049] text-[#edf2f5]">
      <div className="flex flex-row justify-between text-center px-2 text-[#edf2f5]">
        <div>
          <Link to="/">
            <img src={logo} alt="InvestorInfo" className="mx-10 w-36" />
          </Link>
        </div>
        <ul className="flex flex-row justify-between items-center">
          <li className="ml-5 hover:text-[#f77f00] hover:cursor-pointer">
            <Link to="/" className="flex items-center">
              <FaHome className="mr-1.5" />
              Home
            </Link>
          </li>
          <li className="ml-5 hover:text-[#f77f00] hover:cursor-pointer">
            <Link to="/login" className="flex items-center">
              <FaSignInAlt className="mr-1.5" /> Login
            </Link>
          </li>
          <li className="ml-5 hover:text-[#f77f00] hover:cursor-pointer">
            <Link to="/register" className="flex items-center">
              <FaUser className="mr-1.5" />
              Sign-up
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
