import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  {} from '@fortawesome/free-solid-svg-icons';

import "./header.css";

const Header = () => {
    return ( 
        <div className="header">
            <div className="youtube_logo">
                <img src={require("./images/youtube.png")} alt="a" />
            </div>
            <h1>YouTube Analytics</h1>
            <div className="foots">
                <div className="left-foot">
                    <img src={require("./images/left-footprint.png")} alt="a" />
                </div> 
                <div className="right-foot">
                    <img src={require("./images/right-footprint.png")} alt="a" />
                </div> 
            </div>
            
            
        </div>
     );
}
 
export default Header;