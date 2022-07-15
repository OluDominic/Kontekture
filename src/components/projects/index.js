import React from 'react'
import HomeProjects from '../project';
import './index.scss'
import Pic1 from './../../assets/projects/image 56.jpg'
import Pic2 from './../../assets/projects/image 10.jpg'
import Pic3 from './../../assets/projects/image 57.jpg'
import Pic4 from './../../assets/projects/image 58.jpg'

const ProjectsPic=({icon, location, tag, type})=> {
    return (
        <div className="projectsPics">
            <div className="projectsPics-sub">
                <div className="projectsIcon">
                    {icon}
                </div>
                <div className="type">
                    <div>{type}</div>
                </div>
            </div>
            <div className="projectsPics-sub1">
                <p>{location}</p>
                <h3>{tag}</h3>
            </div>
        </div>
    );
}

const Projects =()=> {

    return (
        <div className="projects">
            <div className="projects-kont">
                <div>
                    <h2>Our works - Past, Current, Future</h2>
                    <p>Our projects include construction of banks, mobile banking units, mobile laboratory units,
                        mobile offices; and residential developments for studio units, flat apartments, and duplexes.
                    </p>
                </div>
            </div>
            <div className="projects-sub">
                <HomeProjects />
            </div>
            <div className="projects-gallery">
                <div className="projects-gallery-sub1">
                    <div className="pics">
                        <ProjectsPic 
                            icon={<img src={Pic1} alt="pic1"/>}
                            location="Abuja"
                            tag="UBTH COOP Digital Center"
                            type="3D"
                        />
                        <ProjectsPic 
                            icon={<img src={Pic2} alt="pic1"/>}
                            location="Lagos"
                            tag="Access Bank Container"
                            type="2D"
                        />
                        <ProjectsPic 
                            icon={<img src={Pic3} alt="pic1"/>}
                            location="Benin"
                            tag="UNIBEN Shopping mall"
                            type="2D"
                        />
                        <ProjectsPic 
                            icon={<img src={Pic4} alt="pic1"/>}
                            location="Lagos"
                            tag="Foodies Facade"
                            type="2D"
                        />
                        <ProjectsPic 
                            icon={<img src={Pic1} alt="pic1"/>}
                            location="Abuja"
                            tag="Hustle & Bustle"
                            type="3D"
                        />
                        <ProjectsPic 
                            icon={<img src={Pic2} alt="pic1"/>}
                            location="Lagos"
                            tag="Cubana Suite"
                            type="3D"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;