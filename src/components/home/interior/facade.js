import React from 'react';
import Carousel from 'react-elastic-carousel';
import Facade1 from './../../../assets/image 56.jpg'
import Facade2 from './../../../assets/image 57.jpg'
import Facade3 from './../../../assets/image 54.jpg'
import "./styles.scss";

const Card =({pic, tag})=> {
    return (
        <div className="card">
            <div className="pic">{pic}</div>
            <div className="tag"><div>{tag}</div></div>
        </div>
    );
}

export default function Facade() {

    const breakPoint = [
        { width: 1, itemsToShow: 1},
        { width: 750, itemsToShow: 2},
        { width: 1200, itemsToShow: 3},
        { width: 1800, itemsToShow: 4}
    ]
    return (
        <div className="carousel">
            <Carousel breakPoints={breakPoint}>
                <Card
                    pic={<img src={Facade1} alt="facade1" />} 
                    tag="2D"
                />
                <Card 
                    pic={<img src={Facade2} alt="facade2" />} 
                    tag="3D"
                />
                <Card 
                    pic={<img src={Facade3} alt="facade3" />} 
                    tag="2D"
                />
                <Card 
                    pic={<img src={Facade2} alt="facade4" />} 
                    tag="3D"
                />
            </Carousel>
        </div>
    )
}