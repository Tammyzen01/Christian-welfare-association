import React from 'react'
import MV from '../components/about'
import Nav from '../components/Nav/nav.js';
import Footer from '../components/footer' ;
import {scroller } from 'react-scroll';


const About = ()=>{
    const scrollToPage = (pageName)=>{
        scroller.scrollTo(pageName);
      }
    return(
        <div>
            <Nav scrollToPage={scrollToPage}/>
            <MV />
            <div style={{marginTop:"0%"}}>
            <Footer /> 
            </div>
            
        </div>
    );
}

export default About;