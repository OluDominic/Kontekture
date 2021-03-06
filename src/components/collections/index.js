import React from 'react';
import Button from './../forms/Button'
import Pic1 from './../../assets/Group (2).png'
import Pic2 from './../../assets/Group (3).png'
import ReactWhatsapp from 'react-whatsapp';
import './index.scss'

const Collections=()=> {

    return(
        <div className="collections">
            <div className="col">
                <div className="picone">
                    <img src={Pic1} alt="pic1" />
                </div>
                <div className="col-div">
                    <h2>Collaborate with experts</h2>
                    <p>If your global aligns with our vision about  creating the most delightful construction experiences possible, we'd love to talk to you.</p>
                    {/* <p> </p> */}
                    <div className="col-but">
                        
                            <ReactWhatsapp className="whatsapp" number="1-212-736-5000" message="Hello!!" ><Button>Chat on whatsapp</Button></ReactWhatsapp>
                    </div>
                </div>
                <div className="pictwo">
                    <img src={Pic2} alt="pic2" />
                </div>
            </div>
        </div>
    );
}

export default Collections;