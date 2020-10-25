import React,{useState,useEffect} from 'react';
import Burger from './burger';
import logo from '../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMobile } from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Nav = ({scrollToPage})=>{

   useEffect(()=>{
      Aos.init({ duration:3000 });
   },[]);

   const [navbar,setnavbar]=useState(false);

   const Scrollings = ()=>{
      console.log(window.scrollY)
      if(window.scrollY >= 55){
           setnavbar(true);
      }else{
         setnavbar(false);
      }
   }

   window.addEventListener('scroll',Scrollings);

    return(
       <div className={navbar ? 'Active' : 'Nav' }>
            <div  className="logo">
            <img src={logo} width="50px" height="50px" alt="logo" />
            </div>
            <div>
            <Burger scrollToPage={scrollToPage}/>
            </div>
            <div data-aos="fade-down" className="Number" >
            <FontAwesomeIcon icon={faMobile}/> &nbsp; 9840121115
            </div>
       </div>
    );
}

export default Nav;