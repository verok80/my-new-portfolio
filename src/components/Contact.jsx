import React from "react";
import  "../index.css";

function Contact(){
    return(
        <section id="contact">
        <div className="container">
        <h1>Get In Touch</h1>
        <div className="contactBox">
         
        <span className="myEmail">hesskol33@gmail.com</span>
  
        <div className="btnBox">
            <a  className="btn PrimaryBtn"
            href="mailto:your_email@gmail.com"
            target="_blank"
            rel="noopener noreferrer">
       Send mail
        </a>
        </div>
            </div>
        </div>
        </section>
    )
}
export default Contact;