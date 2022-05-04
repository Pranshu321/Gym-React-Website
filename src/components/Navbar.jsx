import React, { useState } from "react";
import Link from "react-scroll/modules/components/Link";
import logo from "../images/logo.png"


function Navbar(){

 const [ nav, setnav] = useState(false);

 const changeBackgound = ()=> {
     if(window.scrollY >= 50){
         setnav(true);
     }
     else{
         setnav(false);
     }
 }
 window.addEventListener('scroll',changeBackgound);

    return(
       <nav className={nav ? "nav active" : "nav"} id="top">
          <Link to="main" className="logo">
              <img src={logo} alt="" />
          </Link>
          <input className="menu-btn" type={"checkbox"} id='menu-btn'/>
          <label className="menu-icon" for='menu-btn'>
              <span className="nav-icon"></span>
          </label>
          <ul className="menu" style={{cursor:"pointer"}}>
              <li><Link to="main" smooth={true} duration={1000}>Home</Link></li>
              <li><Link to="features" smooth={true} duration={1000}>Features</Link></li>
              <li><Link to="offer" smooth={true} duration={1000}>Offers</Link></li>
              <li><Link to="about" smooth={true} duration={1000}>About</Link></li>
              <li><Link to="contact" smooth={true} duration={1000}>Contact Us</Link></li>
              {/* <li><Link to="#">FeedBack</Link></li> */}
          </ul>
       </nav>
    );
}

export default Navbar;