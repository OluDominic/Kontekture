import React from 'react'
import Img from './../../assets/Group 83.png'
import Pic1 from './../../assets/estimate/image 64.png'
import Pic2 from './../../assets/estimate/image 65.png'
import Pic3 from './../../assets/estimate/image 63.png'
import './index.scss'
import Form from '../form/form'
import { Link, Outlet } from 'react-router-dom'

const Building=({icon, type, text})=> {
    return(
        <div className="building">
            <div className="build-icon">{icon}</div>
            <div className="build-msg">
                <div>
                    <div className="type">{type}</div>
                    <div className="text">{text}</div>
                </div>
            </div>
        </div>
    );
}

const Estimator =()=> {

    return (
        <div className="estimator">
            <div className="estimate">
                <div className="estimate-intro">
                    <div className="intro-sub">
                        <h2>Get the cost of your dream house in two minutes</h2>
                        <p>Our estimator is intuitive and easy to use for intending home owners, designers, engineers and other construction professionals.</p>
                        <div><img src={Img} alt=""/></div>
                    </div>
                </div>
                <div className="estimate-form">
                    <div className="estimate-form-sub1">
                        <h3>Choose a building type.</h3>
                        <p>A one-storey building has 2 floors (the ground floor and the upper floor).  Similarly, a two-storey building has 3 floors, a three-storey building has 4 floors, and so on.</p>
                        <div className="build">
                            <ul>
                                <li>
                                    <Link to="bungalows">
                                        <Building 
                                            icon={<img src={Pic1} alt="pic1" />}
                                            type="bungalows"
                                            text="Neque porro quisquam est qui dolorem ipsum consectetur, adipisci velit..."
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="bungalows">
                                        <Building 
                                            icon={<img src={Pic2} alt="pic2" />}
                                            type="flats and apartments"
                                            text="Neque porro quisquam est qui dolorem ipsum consectetur, adipisci velit..."
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="bungalows">
                                        <Building 
                                            icon={<img src={Pic3} alt="pic3" />}
                                            type="duplex/mansions"
                                            text="Dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                                        />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Estimator;