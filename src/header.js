import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  { faLightbulb, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

import "./header.css";
import { useRef, useState, useEffect } from "react";

import axios from "axios";


const Header = ({setFeedback, setUrl_sent,setErrormesagge}) => {

const left = useRef();
const [visible, setVisible] = useState(false)
const total_animation_time = 3000
const division = 8

const [focused, setFocused] = useState(false);

/* const [feedback, setFeedback] = useState(null);
 */
const link = useRef();

/* useEffect(() => {
const intervalId = setInterval(() => {
    if(visible){setVisible(false); total_animation_time=1000}
    else{setVisible(true); total_animation_time=3000}
}, total_animation_time);

return () => clearInterval(intervalId);
} ); */


const handle_focus = () => {
            setFocused(true)
            setVisible(true)
}

const handle_blur = (e) => {
        if(e.target.value.length === 0)
        {setFocused(false)}
        setVisible(false)
}

const handle_click = () => {
        const youtube_url_format =/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})?$/
        if(link.current &&  youtube_url_format.test(link.current.value))
        {
            setUrl_sent(true);
            console.log("satisfies url format")
            axios.post("http://localhost:9000/testAPI",
                {url: link.current.value}
            ).then(function (response) {
                setFeedback(response);
            }).catch((error) => setErrormesagge(error))
            link.current.value = "";
            setFocused(false)
        
        }
        else{
            console.log("enter a valid youtube url");
            alert("Please enter a valid YouTube URL");
            link.current.value = "";
        }


}


    return ( 
        <div className="header">
            
            <div className="url_bar">
                <span>
                    <FontAwesomeIcon icon={faLightbulb} color={focused ? "yellow" : "black"} size={"3x"}/>
                    <div className="lights" style={{visibility: focused ? "visible" : "hidden"}}>
                        <div className="light" id="l1"></div>
                        <div className="light" id="l2"></div>
                        <div className="light" id="l3"></div>
                    </div>
                </span>
                    <input type="text" onFocus={handle_focus} onBlur={(e)=>handle_blur(e)} 
                        placeholder={"Enter a URL to see through words"} ref={link}
                     />
                    
                    <button onClick={handle_click} id="link_button" style={{visibility: focused ? "visible" : "hidden"}}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} color={"yellow"} size={"2x"}/>
                    </button>   
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
                    <div className="foot" style={{opacity:visible ? "1" : 0 }}>
                    </div> 
                    <div className="foot" id="nine" style={{opacity:visible ? "1" : 0, transitionDelay:visible ? 8*total_animation_time/division+"ms" : "0s"  }}>
                        <img src={require("./images/left-footprint.png")} alt="a" />
                    </div> 
                    <div className="foot" style={{opacity:visible ? "1" : 0 }}>
                    </div> 
                    <div className="foot" id="eleven" style={{opacity:visible ? "1" : 0, transitionDelay:visible ? 10*total_animation_time/division+"ms" : "0s"  }}>
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
                    <div className="foot" style={{opacity:visible ? "1" : 0}}>
                    </div> 
                    <div className="foot" id="ten" style={{opacity:visible ? "1" : 0, transitionDelay:visible ? 9*total_animation_time/division+"ms" : "0s" }}>
                        <img src={require("./images/right-footprint.png")} alt="a" />
                    </div> 
                    <div className="foot" style={{opacity:visible ? "1" : 0}}>
                    </div> 

                </div>
                
                {
                    !visible ? 
                    <div className="motto" style={{visibility: visible ? "hidden" : "visible"}}>
                        <div className="logo_double">
                            <div className="youtube_logo">
                            <img src={require("./images/youtube.png")} alt="a" />
                            </div>
                        </div>
                        See Through Words

                    </div>
                    : null
                }
                
                
            </div>
                

            
        </div>
     );
}
 
export default Header;