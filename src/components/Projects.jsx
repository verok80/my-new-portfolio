import React from "react";
import "../index.css";
import { ProjectData } from "../data/ProjectData";

function Projects(){
   return(
        <section id="projects">
        
              <h1>Projects</h1>
           
            {ProjectData.map((element) => {
                const{ id, img, title, techStack, github_url, demo_url} = element;
                return(
                    <article  className="projectCard" key ={id}>
                         <div className="cardLeft">
                        <img className="imageProject" src={img}   alt={`Screenshot of ${title}`}/>
                        </div>
                        <div className="cardRight">
                   
                         <h4 className="title">{title}</h4>
                      
                        
                         <h4 className="stack">Tech Stack - </h4> 
                          <h4 className="stack-name">{techStack}</h4>
                         
                         <div className="btnGroup">
                         <a href={github_url}
                          target="_blank"
                          rel="noopener noreferrer">
                            <button className="btn PrimaryBtn">Github</button>
                         </a>
                         <a href={demo_url}
                          target="_blank"
                          rel="noopener noreferrer">
                            <button className="btn PrimaryBtn">Demo➜</button>
                         </a>
                     </div>
                     </div>
                    </article>
                )
            })
        }
    </section>
    )
}
export default Projects;