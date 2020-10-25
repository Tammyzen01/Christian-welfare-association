import React,{useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Committee = ()=>{
   useEffect(()=>{
      Aos.init({ duration:3000 });
   },[]);
    return(
        <div className="Committee-container">
        <div className="imag">
        <div className="layer2">
        <h1>Committee </h1>
        <span/>
             <p>
             The activities of the<strong> Christian Welfare Association</strong>  (shortly known as CWA)<br/> hold during the
             year were in furtherance to the aims and <br/> objects of the Association and to the Glory of our Lord
             </p>
         </div>
        </div>
             <div className="entier">
              <div className="title-list"><h1>List of office bearers</h1></div>
              <div className="member">
              <div data-aos="fade-right" className="sub">
                      <div  className="tag">
                             <p>President :</p>
                             <p>Vice President (General) : </p>
                             <p>Vice President (Finance) : </p>
                             <p>General Secretary :</p>
                             <p>Joint Secretary :</p>
                             <p>Treasurer :</p>
                          </div>
                          <div  className="names">
                              <p>Dr.J.S.Augustine David</p>
                              <p>Mr.Gnanadurai Balraj</p>
                              <p>Dr.P.E.R.Premchand</p>
                              <p>Dr.B.RavikumarDavid</p>
                              <p>Mr.C.Marshall</p>
                              <p>Mr.Jebasingh Jothi</p>
                          </div>
                      </div>
                      <div data-aos="fade-left"  className="sub">
                      <div  className="tag">
                      <p>E.C.Members :</p>
                          </div>
                          <div  className="names">
                              <p> Mr.P.Asir Pandian</p>
                              <p>Mr.Jawahar Chandrasekaran</p>
                              <p>Mr.N.Jebaraj</p>
                              <p>Mr.K.Muthumony</p>
                              <p>Dr.D.Paul Tagore</p>
                              <p>Mr.Rajan Samson</p>
                              <p>Mr.D.Rajasingh</p>
                              <p>Mr.Samuel Ravi</p>
                              <p>Mrs.Sheena Manuel</p>
                              <p>Mr.C.J.Vijayasingh</p>
                              <p>Mr.H.Vinod Melvin</p>
                          </div>
                      </div>
              </div>
             </div>
        </div>
    );
}
export default Committee;