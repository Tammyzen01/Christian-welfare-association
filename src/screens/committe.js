import React from 'react';
import Committee from '../components/committee';
import Nav from '../components/Nav/nav.js';
import Footer from '../components/footer' ;
import {scroller } from 'react-scroll';


const Community = ()=>{
    const scrollToPage = (pageName)=>{
        scroller.scrollTo(pageName);
      }
    return(
        <div>
              <Nav scrollToPage={scrollToPage}/>
              <Committee />
              <Footer />      
        </div>
    );
}

export default Community;