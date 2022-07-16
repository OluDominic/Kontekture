import React from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import Logo from './../../assets/kontekture-icon-152x152-1.png'
import Button from './../forms/Button'
import './index.scss'

const Header =()=> {
    const navigate = useNavigate();

    const home=()=> {
        navigate('/')
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
                    <div className="head-links">
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
                </div>
            </div>
        </header>
    );
}

export default Header;