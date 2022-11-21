import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  {} from '@fortawesome/free-solid-svg-icons';

import "./header.css";
import { useRef, useState, useEffect } from "react";

const Header = () => {

const left = useRef();
const [visible, setVisible] = useState(false)


    useEffect(() => {
        const intervalId = setInterval(() => {
            if(visible){setVisible(false)}
            else{setVisible(true)}
        }, 2000);
      
        return () => clearInterval(intervalId);
      }, );


    return ( 
        <div className="header">
            <div className="youtube_logo">
                <img src={require("./images/youtube.png")} alt="a" />
            </div>
            <h1>YouTube Analytics</h1>
            <div className="foots">
                <div className="left-foot" style={{opacity:visible ? "1" : 0 }}>
                    <img src={require("./images/left-footprint.png")} alt="a" />
                </div> 
                <div className="right-foot" style={{opacity:visible ? "1" : 0, transitionDelay:"0.2s" }}>
                    
                    <img src={require("./images/right-footprint.png")} alt="a" />
                </div> 
            </div>
        </div>
     );
}
 
export default Header;