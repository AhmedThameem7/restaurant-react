import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";
import cart from './images/cart.png'
import logo from "./images/logo.png";
import menu from'./images/menu.png';
const Header = () => {
  const [open,setOpen]=useState(false)
  const handlemenu=()=>setOpen(!open)
  return (
    <div className="navcont">
      <img className="logo" src={logo}></img>
      <nav className={`navbar ${open ? 'active' : ''}`}>
        <Link className="cla" to="/">
          Home
        </Link>
        <Link className="cla" to="/About">
          About
        </Link>
        <Link className="cla" to="/Products">
          Products
        </Link>
        <Link className="cla" to="/Contact">
          Contact Us
        </Link>
        <Link className="cla" to="/Cart">
          <img src={cart} style={{height:"20px",marginRight:"2px"}}></img>Cart
        </Link>
        <Link className="cla" to="/Login">
          <button className="cla2">Login</button>    
        </Link>
      </nav>
        <div>
          <img src={menu} className='menubar' onClick={handlemenu}></img>
        </div>
    </div>
  );
};
export default Header;
