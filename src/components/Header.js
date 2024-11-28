import { HEADER_LOGO } from "../utils/constants";

const Header=()=>{
    return(
      <div className="header">
        <div className="logo">
          <img alt="logo" src={HEADER_LOGO} className="logo-img"></img>
        </div>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    ) 
}

export default Header;