import React from 'react'
import { NavLink } from 'react-router-dom';
import './index.scss'

const HomeProjects =()=> {

    return(
        <div className="homeProjects">
            <div className="homeP-sub1">
                <nav>
                    <ul>
                        <li>
                            <NavLink to={'/'} activeStyle={{background: '#6EEA87', borderRadius: '100px', display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center',padding: '10px 32px'}}>Facade</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/dsd'} activeStyle={{background: '#6EEA87', borderRadius: '100px', display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center',padding: '10px 32px'}}>Container Construction</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/dd'} activeStyle={{background: '#6EEA87', borderRadius: '100px', display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center',padding: '10px 32px'}}>Interiors</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/d'} activeStyle={{background: '#6EEA87', borderRadius: '100px', display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center',padding: '10px 32px'}}>Concrete Buildings</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/v'} activeStyle={{background: '#6EEA87', borderRadius: '100px', display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center',padding: '10px 32px'}}>Civil Works</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/wq'} activeStyle={{background: '#6EEA87', borderRadius: '100px', display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center',padding: '10px 32px'}}>Lightening</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default HomeProjects;