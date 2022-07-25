import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import Logo from './../../assets/kontekture-icon-152x152-1.png'
import Button from './../forms/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faBarsStaggered, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header =()=> {

    const [clicked, setClicked] = useState(false)
    const navigate = useNavigate();

    const home=()=> {
        navigate('/')
    }

    const handleClick =()=> {
        setClicked(!clicked)
    }

    return (
        <header>
            <div className="header">
                <div className="header-sub">
                    <div className="head-img">
                        <ul>
                            <li>
                                <div className="head-logo"><img onClick={home} src={Logo} alt="logo" /></div>
                            </li>
                        </ul>
                    </div>
                    <div style={{transform: clicked ? "translateX(0px)" : "translateX(100%)"}} className="head-links">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/blogs">Blogs</Link>
                            </li>
                            <li>
                                <Link to="/media">Media</Link>
                            </li>
                            <li>
                                <Link to="/projects">Projects</Link>
                            </li>
                        </ul>
                        
                    </div>
                    <div className="headBut">
                        <ul>
                            <li>
                                <Link to="/estimator">
                                    <Button>get an estimate</Button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="menu" onClick={handleClick}>
                        {clicked ? <span>
                        <FontAwesomeIcon className="fa-times" icon={faTimes} /></span> : 
                        <span><FontAwesomeIcon className="fa-bars" icon={faBarsStaggered} /></span>}
                        
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;