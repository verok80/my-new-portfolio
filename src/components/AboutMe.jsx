import React from "react";
import "../index.css"
import imageTwo from '../assets/hand.png';
import imageThree from '../assets/Me2-modified.png';
import imageFour from '../assets/html-5.png';
import imageFive from '../assets/css-3.png';
import imageSix from '../assets/js.png';
import imageSeven from '../assets/react.png';
import imageEight from '../assets/redux.png';
import imageNine from '../assets/node-js.jpg';
import imageTen from '../assets/bootstrap.png';
import imageEleven from '../assets/figma.png';
import imageTwelve from '../assets/flutter.png';
import imageThirteen from '../assets/certificate-html.png';
import imageFourteen from '../assets/certificate-bootstrap.png';
import imageFifteen from '../assets/certificate-JS.png';
import imageSixteen from '../assets/certificate-node.png';

function AboutMe(){
    return(
        <section id="aboutMe">
            <div >
            <h1>About me</h1>
           <img className="myPhoto" src={imageThree} width="200px" alt="Me"/>
        <img className="hand" src={imageTwo} width="40px" alt="hand"/>
        <div className="about">
            
             <p className="text">Hello, my name is Vera Kolotyuk, a passionate Frontend Developer<br/> with a love for creating an user-friendly web experiences.<br/> I specialize in turning design concepts into interactive web applications<br/> using a powerful stack of technologies.
My goal is to deliver<br/> web solutions that not only meet but exceed your expectations,<br/> but also bring fresh ideas to the table.
 Whether you need a stunning<br/> website, a web app, or a user-friendly interface, <br/>I'm here to turn your vision into reality. Let's collaborate <br/> and create something amazing together! Feel free to reach out to me<br/> via email or connect with me on Linkedin to discuss your next project<br/> or just chat about all things frontend development.</p>
 
<div>
 <p className="textTwo">I have been using the following technologies</p>
 </div>
 <div className="technologies">
    <img src={imageFour} width="70px" alt="html"/>
    <img src={imageFive} width="70px" alt="css"/>
    <img src={imageSix} width="70px" alt="js"/>
    <img src={imageSeven} width="70px" alt="react"/>
    <img src={imageEight} width="70px" alt="redux"/>
    <img src={imageNine} width="70px" alt="node-js"/>
    <img src={imageTen} width="70px" alt="bootstrap"/>
    <img src={imageEleven} width="70px" alt="figma"/>
    <img src={imageTwelve} width="70px" alt="flutter"/>
</div>
<div className="certificateContainer">
    <h2 className="certificateText">My Certificates</h2>
    <div className="certificate">
    <img src={imageThirteen} width="250px" alt="certificate"/>
    <img src={imageFourteen} width="250px" alt="certificate"/>
    <img src={imageFifteen} width="250px" alt="certificate"/>
    <img src={imageSixteen} width="250px" alt="certificate"/>
    </div>
</div>
 </div>



        </div>
        </section>
    )
}
export default AboutMe;