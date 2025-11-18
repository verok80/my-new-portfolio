import React from 'react';
import image from '../assets/developer.png';
import "../index.css";

function Main(){
  return(
      <section id="main">
      <div className='container'>
<div className="front">
        <h2>Hi, I'm Vera</h2>
        <h3>Frontend Developer</h3>
        <h4>I'm frontend developer based in USA. I'll hellp you build beautiful websites your user will love</h4>
        </div>
          <div>
        <img className="developer" src={image} alt="Developer"/>
        </div>
        </div>
    </section>
  
    )
}
export default Main;