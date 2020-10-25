import React,{useEffect} from 'react'
import Nav from '../components/Nav/nav.js';
import Footer from '../components/footer';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {scroller } from 'react-scroll';

const Contact = ()=>{
    const scrollToPage = (pageName)=>{
        scroller.scrollTo(pageName);
      }
    useEffect(()=>{
        Aos.init({ duration:3000 });
     },[]);
     return(
         <div className="Contact">
         <Nav scrollToPage={scrollToPage}/>
             <div className="Title">
             <h1>
             Tell us what you feel
             </h1>
             <h2>Feel free to contact us anytime</h2>
             </div>
             <div data-aos="fade-up" className="forms">
                 <div className="overlay5">
                <div className="reg">
                <form>
                    <label for="name"><b>Name</b></label>
                    <input type="text" placeholder="name"/>
                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Email"/>
                    <label for="number"><b>Phone no</b></label>
                    <input type="text" placeholder="Phone"/>
                 </form>
                 <form>
                    <label for="email"><b>Message</b></label>
                    <textarea type="text" placeholder="Leave a message for us"/>
                 </form>
                </div>
                <div className="button5">Register</div>
                 </div>
             </div>
             <Footer />
         </div>
     ); 
}

export default Contact;