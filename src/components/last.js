import React,{useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Last =()=>{
   useEffect(()=>{
    Aos.init({ duration:2000 });
 },[]);
    return(
         <div data-aos="fade-up" className="Last-Container">
         <div className="layer">
             <p>
             <h1>We look forward </h1>for your earnest prayers and generous
                    contributions to carry forward these activities to help the deserving needy
                    children. Your contributions can be sent in form of DD / Cheque drawn in
                    favour of<br/><strong> “Christian Welfare Association” </strong>
             </p>
         </div>
         <div className="address">
                    <h1>To:</h1>
                  <p>
                    CA. Jebasingh Jothi, Treasurer,<br/> Christian Welfare Association,
                    New No.15, Old No.4/2,<br/> Seeyalam 2nd Street, Villivakkam,<br/>
                    Chennai - 600 049
                  </p>
         </div>

        </div>
    );
}

export default Last;