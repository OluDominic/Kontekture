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
                        <h1>A new construction experience.</h1>
                        <label>Re-inventing the art of building sustainable housing without compromising on safety and quality of infrastructure.</label>
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
                    <HomeCard 
                        title="Infrastructure"
                        icons={ <img src={Infra} alt="" />}
                        subtitle="Our focus is on making sustainable and affordable infrastructure available at scale, for residential and commercial spaces."
                    />
                    <HomeCard 
                        title="Turnkey"
                        icons={ <img src={House} alt="" />}
                        subtitle="We are a complete infrastructure vertical, executing projects involving design, construction and maintenance."
                    />
                    <HomeCard 
                        title="Energy"
                        icons={ <img src={Energy} alt="" />}
                        subtitle="We harness the sun’s energy to provide clean sustainable energy that is both environmentally and pocket friendly. "
                    />
                </div>
                
                <div className="clients">
                    <div className="clients-sub">
                        <h2>Our clients</h2>
                        <p>We have had the pleasure to work with a wide variety of clients ranging from startups to large companies, such as:</p>
                        <div className="bank-logo">
                            <img src={ubth} alt="ubth" />
                            <img src={gtlogo} alt="gtbank" />
                            <img src={accesslogo} alt="access" />
                        </div>
                    </div>
                </div>
                <div className="our-works">
                    <h2>Our works - Past, Current, Future.</h2>
                    <p>Our projects include construction of banks, mobile banking units, mobile laboratory units, mobile offices; and residential developments for studio units, flat apartments, and duplexes.</p>
                </div>
                <HomeProjects />
                <Outlet />
                <div className="featured-in">
                    <h2>As featured in</h2>
                    <p>We have had the pleasure to work with a wide variety of clients ranging from startups to large companies, such as:</p>
                    <div className="channels-medis">
                        <img src={Channels} alt="channels" />
                        <img src={Bbc} alt="bbs" />
                        <img src={Deutsche} alt="deutche" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;