import { useState } from "react";
import { HEADER_LOGO } from "../utils/constants";
import { Link } from "../../node_modules/react-router-dom/dist/umd/react-router-dom.development";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="flex justify-between text-center items-center pr-6 shadow-md p-1">
      <div className="w-40">
        <Link to="/">
          <img alt="logo" src={HEADER_LOGO} className="logo-img"></img>
        </Link>
      </div>
      <ul className="flex gap-3">
        <li className="hover:text-red-500 text-lg">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-red-500 text-lg">
          <Link to="/about">About Us</Link>
        </li>
        <li className="hover:text-red-500 text-lg">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="hover:text-red-500 text-lg">
          <Link to="/instamart">Instamart</Link>
        </li>
        <li className="hover:text-red-500 text-lg">Cart</li>
        <li>
          <button
            className="bg-red-500 p-2 px-3 rounded-lg text-white text-md"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
