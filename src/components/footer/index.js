import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import Logo from './../../assets/kontekture-icon-152x152-1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import './index.scss'

const Footer =()=> {
    const history = useHistory();


    const home =()=> {
        history.push('/')
    }

    return (
        <footer>
            <div className="footer">
                <div className="foot-sub">
                    <div className="address">
                        <ul>
                            <li>
                                <div className="foot-logo">
                                    <img onClick={home} src={Logo} alt="logo" />
                                </div>
                            </li>
                        </ul>
                        <div className="add">
                            <h4>371 Borno Way, Spencer, Yaba, Lagos.</h4>
                        </div>
                        <div className="social">
                            <ul>
                                <li>
                                    <span><FontAwesomeIcon icon={faFacebook} width="20px" height="20px" /></span>
                                    <span><FontAwesomeIcon icon={faInstagram} width="20px" height="20px" /></span>
                                    <span><FontAwesomeIcon icon={faTwitter} width="24px" height="25px" /></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="company">
                        <p>Company</p>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="company">
                        <p>Resources</p>
                        <ul>
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
                    <div className="foot-cont">
                        <p>Contact</p>
                        <h4> <a href="https://info@kontekture.com"> info@kontekture.com </a></h4>
                        <h4> <a href="tel:+234 802 505 9733"> +(234) 802 505 9733 </a> </h4>
                        <h4> <a href="tel:+234 803 828 5355"> +(234) 803 828 5355 </a> </h4>
                    </div>
                </div>
                <div className="rights">Kontekture <span><FontAwesomeIcon icon={faCopyright} /></span> 2022. All rights reserved.</div>
            </div>
        </footer>
    );
}

export default Footer;