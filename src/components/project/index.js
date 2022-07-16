import React from 'react'
import { NavLink } from 'react-router-dom';
import './index.scss'

const HomeProjects =()=> {
    let activeStyle = {
        background: '#6EEA87',
        borderRadius: '100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px 32px'
    }

    return(
        <div className="homeProjects">
            <div className="homeP-sub1">
                <nav>
                    <ul>
                        <li>
                            <NavLink to={'/'} style={({isActive})=> 
                                isActive? activeStyle:undefined
                            }>Facade</NavLink>
                        </li>
                        <li>
                            <NavLink to={'container'} style={({isActive})=> 
                                isActive? activeStyle:undefined
                            }>Container Construction</NavLink>
                        </li>
                        <li>
                            <NavLink to={'interior'} style={({isActive})=> 
                                isActive? activeStyle:undefined
                            }>Interiors</NavLink>
                        </li>
                        <li>
                            <NavLink to={'concrete'} style={({isActive})=> 
                                isActive? activeStyle:undefined
                            }>Concrete Buildings</NavLink>
                        </li>
                        <li>
                            <NavLink to={'civil'} style={({isActive})=> 
                                isActive? activeStyle:undefined
                            }>Civil Works</NavLink>
                        </li>
                        <li>
                            <NavLink to={'lightening'} style={({isActive})=> 
                                isActive? activeStyle:undefined
                            }>Lightening</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default HomeProjects;