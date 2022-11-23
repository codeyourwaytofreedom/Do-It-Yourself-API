import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  {faBoltLightning, faFireBurner, faLightbulb} from '@fortawesome/free-solid-svg-icons';

import "./header.css";
import { useRef, useState, useEffect } from "react";

const Header = () => {

const left = useRef();
const [visible, setVisible] = useState(false)
const total_animation_time = 3000
const division = 8

const [focused, setFocused] = useState(false)

     /* useEffect(() => {
        const intervalId = setInterval(() => {
            if(visible){setVisible(false); total_animation_time=1000}
            else{setVisible(true); total_animation_time=3000}
        }, total_animation_time);
      
        return () => clearInterval(intervalId);
      } ); */
const handle_focus = () => {
            setFocused(true)
}

const handle_blur = () => {
        setFocused(false)
}

    return ( 
        <div className="header">
            <div className="logo_double">
                <div className="youtube_logo">
                <img src={require("./images/youtube.png")} alt="a" />
            </div>
            {/* <h1>YouTube Analytics</h1> */}
            </div>
            
            <div className="url_bar" style={{border: focused ? "2px solid white" : "none"}}>
                <span>
                    <FontAwesomeIcon icon={faLightbulb} color={focused ? "white" : "black"} size={"2xl"}/>
                </span>
                
                    <input type="text" onFocus={handle_focus} onBlur={handle_blur} placeholder={"Enter a URL to see through words"} />
                </div>
            <div className="foots">
                <div className="foots_left">
                    <div className="foot" id="one" style={{opacity:visible ? "1" : 0 }}>
                        <img src={require("./images/left-footprint.png")} alt="a" />
                    </div> 
                    <div className="foot" style={{opacity:visible ? "1" : 0 }}>
                    </div> 
                    <div className="foot" id="three" style={{opacity:visible ? "1" : 0,  transitionDelay:visible ? 2*total_animation_time/division+"ms" : "0s"  }}>
                        <img src={require("./images/left-footprint.png")} alt="a" />
                    </div> 
                    <div className="foot" style={{opacity:visible ? "1" : 0 }}>
                    </div> 
                    <div className="foot" id="five" style={{opacity:visible ? "1" : 0, transitionDelay:visible ? 4*total_animation_time/division+"ms" : "0s"  }}>
                        <img src={require("./images/left-footprint.png")} alt="a" />
                    </div> 
                    <div className="foot" style={{opacity:visible ? "1" : 0 }}>
                    </div> 
                    <div className="foot" id="seven" style={{opacity:visible ? "1" : 0, transitionDelay:visible ? 6*total_animation_time/division+"ms" : "0s"  }}>
                        <img src={require("./images/left-footprint.png")} alt="a" />
                    </div> 
                </div>
                <div className="foots_right">
                    <div className="foot" style={{opacity:visible ? "1" : 0 }}>
                    </div> 
                    <div className="foot" id="two" style={{opacity:visible ? "1" : 0, transitionDelay:visible ? total_animation_time/division+"ms" : "0s" }}>
                        <img src={require("./images/right-footprint.png")} alt="a" />
                    </div> 
                    <div className="foot" style={{opacity:visible ? "1" : 0}}>
                    </div> 
                    <div className="foot" id="four" style={{opacity:visible ? "1" : 0, transitionDelay:visible ? 3*total_animation_time/division+"ms" : "0s" }}>
                        <img src={require("./images/right-footprint.png")} alt="a" />
                    </div> 
                    <div className="foot" style={{opacity:visible ? "1" : 0 }}>
                    </div> 
                    <div className="foot" id="six" style={{opacity:visible ? "1" : 0, transitionDelay:visible ? 5*total_animation_time/division+"ms" : "0s" }}>
                        <img src={require("./images/right-footprint.png")} alt="a" />
                    </div> 
                    <div className="foot" style={{opacity:visible ? "1" : 0}}>
                    </div> 
                    <div className="foot" id="eight" style={{opacity:visible ? "1" : 0, transitionDelay:visible ? 7*total_animation_time/division+"ms" : "0s" }}>
                        <img src={require("./images/right-footprint.png")} alt="a" />
                    </div> 

                </div>
                
                {
                    !visible ? 
                    <div className="motto" style={{visibility: visible ? "hidden" : "visible"}}>
                        See Through Words
                    </div>
                    : null
                }
                
            </div>
            
                

            
        </div>
     );
}
 
export default Header;