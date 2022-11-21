import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  {} from '@fortawesome/free-solid-svg-icons';

import "./header.css";
import { useRef, useState, useEffect } from "react";

const Header = () => {

const left = useRef();
const [visible, setVisible] = useState(true)


    /* useEffect(() => {
        const intervalId = setInterval(() => {
            if(visible){setVisible(false)}
            else{setVisible(true)}
        }, 1000);
      
        return () => clearInterval(intervalId);
      }, ); */


    return ( 
        <div className="header">
            <div className="youtube_logo">
                <img src={require("./images/youtube.png")} alt="a" />
            </div>
            <h1>YouTube Analytics</h1>
            <div className="foots">
                <div className="foots_left">
                    <div className="foot" style={{opacity:visible ? "1" : 0 }}>
                        <img src={require("./images/left-footprint.png")} alt="a" />
                    </div> 
                    <div className="foot" style={{opacity:visible ? "1" : 0 }}>
                    </div> 
                    <div className="foot" style={{opacity:visible ? "1" : 0,  transitionDelay:visible ? "0.4s" : "0s"  }}>
                        <img src={require("./images/left-footprint.png")} alt="a" />
                    </div> 
                    <div className="foot" style={{opacity:visible ? "1" : 0 }}>
                    </div> 
                    <div className="foot" style={{opacity:visible ? "1" : 0, transitionDelay:visible ? "0.8s" : "0s"  }}>
                        <img src={require("./images/left-footprint.png")} alt="a" />
                    </div> 
                    <div className="foot" style={{opacity:visible ? "1" : 0 }}>
                    </div> 
                </div>
                <div className="foots_right">
                    <div className="foot" style={{opacity:visible ? "1" : 0, transitionDelay:visible ? "0.2s" : "0s" }}>
                    </div> 
                    <div className="foot" style={{opacity:visible ? "1" : 0, transitionDelay:visible ? "0.2s" : "0s" }}>
                        <img src={require("./images/right-footprint.png")} alt="a" />
                    </div> 
                    <div className="foot" style={{opacity:visible ? "1" : 0, transitionDelay:visible ? "0.2s" : "0s" }}>
                    </div> 
                    <div className="foot" style={{opacity:visible ? "1" : 0, transitionDelay:visible ? "0.6s" : "0s" }}>
                        <img src={require("./images/right-footprint.png")} alt="a" />
                    </div> 
                    <div className="foot" style={{opacity:visible ? "1" : 0, transitionDelay:visible ? "0.2s" : "0s" }}>
                    </div> 
                    <div className="foot" style={{opacity:visible ? "1" : 0, transitionDelay:visible ? "1.0s" : "0s" }}>
                        <img src={require("./images/right-footprint.png")} alt="a" />
                    </div> 
                </div>

                
                
                
            </div>
        </div>
     );
}
 
export default Header;