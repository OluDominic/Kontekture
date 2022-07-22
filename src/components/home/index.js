import React from 'react'
import './index.scss'
import ubth from './../../assets/image 28.jpg'
import gtlogo from './../../assets/gtbank logo.jpg'
import accesslogo from './../../assets/access logo.jpg'
import Infra from './../../assets/icons/image 6.png'
import House from './../../assets/icons/image 8.png'
import Energy from './../../assets/icons/image 7.png'
import Channels from './../../assets/featured/Frame.png'
import Bbc from './../../assets/featured/image 1.png'
import Deutsche from './../../assets/featured/image 3.png'
import HomeProjects from '../homeProjects'
import Logo from './../../assets/kontekture-icon-152x152-1.png';
import HomeLogo from './../../assets/const.jpg'
import Slogan from './../../assets/slogan-arc.png'
import { Helmet } from 'react-helmet'
import Button from './../forms/Button'
import { AnimationOnScroll } from 'react-animation-on-scroll';


import { Link, Outlet } from 'react-router-dom'

const HomeCard =({icons, title, subtitle})=> {
    return (
    <div className="homeCard">
        <div className="icons">
            <div>{icons}</div>
            <div className="line"></div>
        </div>
        <div className="titles">
            <h3>{title}</h3>
            <p>{subtitle}</p>
        </div>
    </div>
    );
}

const Home =()=> {

    return (
        <div className="home">
            <div className="home-sub1">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Kontekture - Home</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="shortcut" href={Logo} />
                </Helmet>
                <div className="newConstruction">
                    <div className="const-img"><div className="tint"></div> <img src={HomeLogo} alt="homelogo" />  </div>
                    <div className="construction">
                    <AnimationOnScroll initiallyVisible={true} duration={5} animateIn="animate__swing">
                        <h1>A new construction experience.</h1>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
                        <p>Re-inventing the art of building sustainable housing without compromising on safety and quality of infrastructure.</p>
                        </AnimationOnScroll>

                        <div className="con-but">
                            <ul>
                                <li>
                                    <Link to="/estimator">
                                        <Button>Get an estimate</Button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="slogan"> <img src={Slogan} alt="slogan"/>  </div>
                </div>
                <div className="infra-sub">
                <AnimationOnScroll initiallyVisible={true}
                    animateIn="animate__flip">
                    <HomeCard 
                        title="Infrastructure"
                        icons={ <img src={Infra} alt="" />}
                        subtitle="Our focus is on making sustainable and affordable infrastructure available at scale, for residential and commercial spaces."
                    />
                    </AnimationOnScroll>
                    <AnimationOnScroll
                    initiallyVisible={true}
                    animateIn="animate__flip"
                  >
                    <HomeCard 
                        title="Turnkey"
                        icons={ <img src={House} alt="" />}
                        subtitle="We are a complete infrastructure vertical, executing projects involving design, construction and maintenance."
                    />
                    </AnimationOnScroll>
                    <AnimationOnScroll initiallyVisible={true}
                    animateIn="animate__flip">
                    <HomeCard 
                        title="Energy"
                        icons={ <img src={Energy} alt="" />}
                        subtitle="We harness the sun’s energy to provide clean sustainable energy that is both environmentally and pocket friendly. "
                    />
                    </AnimationOnScroll>
                </div>
                
                <AnimationOnScroll animateIn="animate__bounceIn">
                <div className="clients">
                    <div className="clients-sub">
                        <h2>Our clients</h2>
                        <p>We have had the pleasure to work with a wide variety of clients ranging from startups to large companies, such as:</p>
                        <AnimationOnScroll
                    initiallyVisible={true}
                    animateIn="animate__flip"
                  >
                        <div className="bank-logo">
                        <AnimationOnScroll animateIn="animate__shakeY" animateOut="animate__bounceOutRight">
                            <img src={ubth} alt="ubth" />
                            </AnimationOnScroll>
                            <AnimationOnScroll animateIn="animate__shakeY" animateOut="animate__bounceOutRight">
                            <img src={gtlogo} alt="gtbank" />
                            </AnimationOnScroll>
                            <AnimationOnScroll animateIn="animate__shakeY" animateOut="animate__bounceOutRight">
                            <img src={accesslogo} alt="access" />
                            </AnimationOnScroll>
                        </div>
                        </AnimationOnScroll>
                    </div>
                </div>
                </AnimationOnScroll>
                <div className="our-works">
                <AnimationOnScroll
                    animateOnce={true}
                    animateIn="animate__rubberBand"
                  >
                    <h2>Our works - Past, Current, Future.</h2>
                    </AnimationOnScroll>
                    <AnimationOnScroll
                    animateOnce={true}
                    animateIn="animate__rubberBand"
                  >
                    <p>Our projects include construction of banks, mobile banking units, mobile laboratory units, mobile offices; and residential developments for studio units, flat apartments, and duplexes.</p>
                    </AnimationOnScroll>
                </div>
                <HomeProjects />
                <Outlet />
                <div className="featured-in">
                <AnimationOnScroll animateOnce={true} animateIn="animate__rubberBand">
                    <h2>As featured in</h2>
                    </AnimationOnScroll>
                    <AnimationOnScroll
                    initiallyVisible={true}
                    animateIn="animate__flip"
                  >
                    <p>We have had the pleasure to work with a wide variety of clients ranging from startups to large companies, such as:</p>
                    </AnimationOnScroll>
                    <div className="channels-medis">
                    <AnimationOnScroll initiallyVisible={true} duration={5} animateIn="animate__swing">
                        <img src={Channels} alt="channels" />
                        </AnimationOnScroll>
                        <AnimationOnScroll
                    initiallyVisible={true}
                    delay={2000}
                    animateIn="animate__wobble"
                  >
                        <img src={Bbc} alt="bbs" />
                        </AnimationOnScroll>
                        <AnimationOnScroll
                    initiallyVisible={true}
                    delay={2000}
                    animateIn="animate__wobble"
                  >
                        <img src={Deutsche} alt="deutche" />
                        </AnimationOnScroll>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;