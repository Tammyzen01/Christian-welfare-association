import React from 'react';
import insta from '../assets/images/instagram.png'
import fb from '../assets/images/facebook.png'
import tw from '../assets/images/twitter.png'

const Footer = ()=>{
    return(
        <div className="Footer-Container">
       <div className="first">
       <h1>Touch with us</h1>
            <div className="social">
                <a href="https://www.instagram.com/"><img src={insta} width="20px" height="20px" alt="insta"/></a>
                <a href="https://www.facebook.com/"><img src={fb} width="20px" height="20px" alt="fb"/></a>
                <a href="https://www.twitter.com/"><img src={tw} width="20px" height="20px" alt="tw"/></a>
            </div>
            <p>
                CA. Jebasingh Jothi, Treasurer,<br/> Christian Welfare Association,
                New No.15, Old No.4/2,<br/> Seeyalam 2nd Street, Villivakkam,<br/>
                Chennai - 600 049
            </p>
       </div>
        </div>
    );
}

export default Footer;