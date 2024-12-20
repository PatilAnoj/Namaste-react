import { useState } from "react";
import { HEADER_LOGO } from "../utils/constants";
import {Link} from "../../node_modules/react-router-dom/dist/umd/react-router-dom.development";

const Header=()=>{
  const [btnName,setBtnName]=useState("Login")
    return(
      <div className="header">
        <div className="logo">
          <Link to="/"><img alt="logo" src={HEADER_LOGO} className="logo-img"></img></Link>
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <li>
            <button onClick={()=>{
              btnName==="Login"?setBtnName("Logout"):setBtnName("Login");
            }}>{btnName}</button>
            </li>
        </ul>
      </div>
    ) 
}

export default Header;