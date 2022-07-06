import React from 'react'
import './index.scss'
import ubth from './../../assets/image 28.jpg'
import gtlogo from './../../assets/gtbank logo.jpg'
import accesslogo from './../../assets/access logo.jpg'

const Home =()=> {

    return (
        <div className="home">
            <div className="home-sub1">
                <div className="clients">
                    <h2>Our clients</h2>
                    <p>We have had the pleasure to work with a wide variety of clients ranging from startups to large companies, such as:</p>
                    <div className="bank-logo">
                        <img src={ubth} alt="ubth" />
                        <img src={gtlogo} alt="gtbank" />
                        <img src={accesslogo} alt="access" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;