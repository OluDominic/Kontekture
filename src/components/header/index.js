import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import './index.scss'

const Header =()=> {
    const history = useHistory();

    const estimate=()=> {
        history.push('/estimator')
    }

    return (
        <header>
            <div className="header">
                <div className="header-sub">
                    <div className="head-img">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="head-links">
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
                        
                    </div>
                    <div className="headBut">
                        <ul>
                            <li>
                                <button onClick={estimate}>Get an estimate</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;