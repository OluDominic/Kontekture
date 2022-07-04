import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import Logo from './../../assets/kontekture-icon-152x152-1.png'
import Button from './../forms/Button'
import './index.scss'

const Header =()=> {
    const history = useHistory();

    const estimate=()=> {
        history.push('/estimator')
    }

    const home=()=> {
        history.push('/')
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
                        </ul>
                        <ul>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link to="/blogs">Blogs</Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link to="/media">Media</Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link to="/projects">Projects</Link>
                            </li>
                        </ul>
                        
                    </div>
                    <div className="headBut">
                        <ul>
                            <li>
                                <Button>get an estimate</Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;