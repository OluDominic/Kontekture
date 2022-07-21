import React from 'react';
import Carousel from 'react-elastic-carousel';
import "./styles.scss";

const Card =({pic, tag})=> {
    return (
        <div className="card">
            <div className="pic">{pic}</div>
            <div className="tag"><div>{tag}</div></div>
        </div>
    );
}

export default function Civilworks() {
    
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
                    tag="2D"
                />
                <Card 
                    tag="3D"
                />
                <Card 
                    tag="2D"
                />
                <Card 
                    tag="3D"
                />
            </Carousel>
        </div>
    )
}