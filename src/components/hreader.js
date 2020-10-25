import React from "react";
import kid from "../assets/images/kid.jpg";
import Nav from '../components/Nav/nav.js';
import logo from '../assets/images/logo.png';
import {scroller } from 'react-scroll';


const Header = ()=>{
  
  const scrollToPage = (pageName)=>{
    scroller.scrollTo(pageName,{ duration: 500, smooth: "ease", offset: -80 });
  }

    return(
        <div className="Header-container">
          <Nav scrollToPage={scrollToPage}/>
            <div className="header-banner">
               <div className="Title">
                <h1>CHRISTIAN <br/> WELFARE ASSOCIATION</h1>
                <img src={logo} className="image2" alt="logo"/>
               </div>
                <div className="image">
                <img src={kid} alt="kid"/>
                </div>
                </div>
        </div>
    );
}

export default Header;