import React,{useEffect} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMobile,faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Ul = styled.ul `
     @media(max-width:768px){
        transform: ${({open}) => open ?'translateX(0)':'translateX(100%)'};
        transition: transform 0.3s ease-in-out;
     }
`;

const RightNav = ({open,scrollToPage})=>{
    useEffect(()=>{
        Aos.init({ duration:3000 });
     },[]);

    return(
      <div>
          <Ul data-aos="fade-down" className="Rightnavi" open={open}>
           <li><a href="/">Home</a></li>
           <li onClick={()=>scrollToPage('Brief')}>
            What we do </li>
           <li><a href="/committe">Committee</a></li>
           <li><a href="/contact">Contact us</a></li>
           <li><a href="/about">About</a></li>
       </Ul>
       <Ul className="Rightnav" open={open}> 
           <li><a href="/">Home</a></li>
           <li onClick={()=>scrollToPage('Brief')}>
            What we do </li>
           <li><a href="/committe">Committee</a></li>
           <li><a href="/contact">Contact us</a></li>
           <li><a href="/about">About</a></li>
           <div className="nav-title">
               <h1>Christian Welfare Association</h1>
               <div className="nav-address">
                   <div className="nav-right">
                       <span><FontAwesomeIcon icon={faMapMarkedAlt}/> &nbsp;Address</span> 
                       <p>
                       New No.15, Old No.4/2<br/> 
                       Seeyalam 2nd Street<br/>
                       Villivakkam<br/>
                       Chennai - 600 049
                       </p>
                   </div>
                   <div className="nav-left">
                         <span> <FontAwesomeIcon icon={faMobile}/> &nbsp;Contact </span>
                         <p> 9840121115.</p>
                   </div>
               </div>
           </div>
       </Ul>
      </div>
    );
}

export default RightNav;