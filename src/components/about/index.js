import React from 'react'
import './index.scss'

import Image1 from './../../assets/about/image 53.png'
import Image2 from './../../assets/about/image 55.png'
import Image3 from './../../assets/about/image 52.png'
import Image4 from './../../assets/about/image 51.png'
import Image5 from './../../assets/about/image 48.png'
import Image6 from './../../assets/about/image 49.png'
import Image8 from './../../assets/about/image 54.jpg'

//the team photos
import Team1 from './../../assets/about-people/image1.jpg'
import Team2 from './../../assets/about-people/image2.jpg'
import Team3 from './../../assets/about-people/image3.jpg'
import Team4 from './../../assets/about-people/image4.jpg'
import Team5 from './../../assets/about-people/image5.jpg'
import Team6 from './../../assets/about-people/image6.jpg'

const AboutPhoto =({icons, name, title})=> {
    return (
        <div className="aboutPhoto">
            <div className="about-icons">
                {icons}
            </div>
            <div className="about-name">{name}</div>
            <div className="about-title">{title}</div>
        </div>
    );
}

const About =()=> {

    return (
        <div className="about">
            <div className="about-one">
                <div className="about-intro">
                    <div className="konk-about">
                    <label>we are kontekture</label>
                    <h2>A construction technology firm.</h2>
                    <p>Our works include prefabs and container projects; covering design, cost evaluation, construction, and project management</p>
                    </div>
                    <div className="about-photoboot">
                        <div className="img1"><img src={Image1} alt="" /></div>
                        <div className="img-23">
                            <img src={Image2} alt="" />
                            <img src={Image3} alt="" />
                        </div>
                        <div className="img3"><img src={Image4} alt="" /></div>
                        <div className="img-45">
                            <img src={Image5} alt="" />
                            <img src={Image6} alt="" />
                        </div>
                    </div>
                    <div className="projects-experience">
                        <div>
                            <h2>$8.1M</h2>
                            <p>Value of projects</p>
                        </div>
                        <div>
                            <h2>191</h2>
                            <p>Projects Executed</p>
                        </div>
                        <div>
                            <h2>48yrs</h2>
                            <p>Combined expereince</p>
                        </div>
                    </div>
                </div>
                <div className="about-sus">
                    <div className="about-sustainable">
                        <div className="about-sus-pic">
                            <img src={Image8} alt="image8"/>
                        </div>
                        <div className="about-sus-word">
                            <div className="const">
                                <div className="enabling">Enabling sustainble housing</div>
                                <p className="">Our construction innovation and use of construction data insights helps us do more with less funds, and means more value for you with the same high quality.</p>
                                <p>We save you 30% on your current construction cost, we complete our projects twice as fast as your typical project duration, delivery period, and we take 100% of the stress of you, while the quality stays the same.</p>
                                <p>We’ve worked with clients like GTBank, Etisalat, Globacom, Smart Home to provide design, construction, and consultancy services..</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="meet-the-team">
                    <h2 className="meet-our-people">Meet our people</h2>
                    <div className="the-team">With our team’s combined decades of experience working with steel, prefabricated and containerized infrastructure; we ensure you get more cost savings and fast-tracked schedules without compromising on the safety and quality of the infrastructure. </div>
                </div>
                <div className="about-team-photo">
                    <AboutPhoto 
                        icons={<img src={Team4} alt="team4" />}
                        name="Name"
                        title="Title"
                    />
                    <AboutPhoto 
                        icons={<img src={Team3} alt="team3" />}
                        name="Name"
                        title="Title"
                    />
                    <AboutPhoto 
                        icons={<img src={Team2} alt="team2" />}
                        name="Name"
                        title="Title"
                    />
                    <AboutPhoto 
                        icons={<img src={Team1} alt="team1" />}
                        name="Name"
                        title="Title"
                    />
                    <AboutPhoto 
                        icons={<img src={Team5} alt="team5" />}
                        name="Name"
                        title="Title"
                    />
                    <AboutPhoto 
                        icons={<img src={Team6} alt="team6" />}
                        name="Name"
                        title="Title"
                    />
                </div>
            </div>
        </div>
    );
}

export default About;