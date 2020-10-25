import React from "react";
import Header from "../components/hreader";
import Brief from "../components/brief";
import Other from "../components/other";
import Last from "../components/last";
import Footer from "../components/footer"
import {  Element } from 'react-scroll';



const Home = ()=>{
    return(
       <div>
            <Header />
            <Element name="Brief" >
              <Brief/>
            </Element>
            <Other/>
            <Last />
            <Footer/>
       </div>
    );
}

export default Home;