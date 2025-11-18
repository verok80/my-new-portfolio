import React from "react";
import "../index.css";
import { HashLink as Link } from "react-router-hash-link";
import { Element } from "react-scroll";

function Header() {

     
    return (
        
        <div className="container">
        <nav className="menu">
            <ul>
                <li>
                <Link to="#projects" 
             className="link">Projects</Link>
                </li>
                <li>
                <Link to="#aboutMe"  
            
             className="link">About Me</Link>
                </li>
                <li>
                <Link to="#contact" 
                
           
             className="link">Contact</Link>
                </li>
              
            </ul>

        </nav>
        <Element name="project" >
     
      </Element>
      <Element name="aboutMe" >
        
      </Element>
      <Element name="contact" >
       
      </Element>
        </div>
    )
}
export default Header;