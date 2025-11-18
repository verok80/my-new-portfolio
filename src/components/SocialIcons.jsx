import React from "react";
import "../index.css"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function SocialIcons(){
    return(
        <div className="items">
            <ul>
                <li>
                    <a className="icons" 
                    href="https://github.com/verok80"
                    target="_blank"
                    rel="noopener noreferrer">
       <FaGithub />
       </a>
      </li>
      <li>
        <a  
                    href="https://www.linkedin.com/in/vera-kolotyuk-59501830a/"
                    target="_blank"
                    rel="noopener noreferrer">
       <FaLinkedin />
       </a>
       </li>
       </ul>
        </div>
    )
}
export default SocialIcons;