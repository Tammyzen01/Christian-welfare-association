import React,{useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCross } from '@fortawesome/free-solid-svg-icons'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Other = ()=>{
  useEffect(()=>{
    Aos.init({ duration:3000 });
 },[]);
    return(
      <div data-aos="fade-right" className="Other-container">
          <div className="box">
          <div className="title2">
          <p>Other Activities of &nbsp;<strong>Christian Welfare Association </strong>&nbsp; includes</p>
          <div class="geeks"></div> 
          </div>
          <div className="lines2">
          <p> <FontAwesomeIcon icon={faCross}/> &nbsp; Marriage Bureau at Chennai and Tuticorin</p>
             <p> <FontAwesomeIcon icon={faCross}/> &nbsp;Visit to Orphanages and providing necessary<br/> financial assistance</p>
             <p> <FontAwesomeIcon icon={faCross}/> &nbsp;Kristhavar Marumalarchi” our monthly magazine <br/>
                which covers Marriage Bureau information,<br/>
                Devotional Articles, Bible Quiz and Health tips</p>
          </div>
          </div>
      </div>
    );
}

export default Other;