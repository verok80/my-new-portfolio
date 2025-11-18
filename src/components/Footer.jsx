import React from "react";
import "../index.css";

function Footer() {
    return(
        <div>
            <div className="footer">
            <span className="footerText">
                ©2025 {""}
                <a className="git"
                href="https://github.com/verok80"
                target="_blank"
            rel="noopener noreferrer">
                  @verok80{""} 
                </a>
            </span>
          </div>
        </div>
    )
}
export default Footer;