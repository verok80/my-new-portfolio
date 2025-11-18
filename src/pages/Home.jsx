import React from "react";
import "../index.css"
import AboutMe from "../components/AboutMe";
import Main from "../components/Main";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SocialIcons from "../components/SocialIcons";
import Projects from "../components/Projects";



function Home(){
    return(
        <>
            <Main/>
            <AboutMe/>
            <Projects/>
            <Contact/>
            <SocialIcons/>
            <Footer/>
      
             </>
    )
}
export default Home;