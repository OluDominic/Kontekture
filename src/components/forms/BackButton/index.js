import React from 'react'
import './index.scss'

const BackButton=({children, otherProps})=> {

    return(

        <button className="backButton" {...otherProps}>
            {children}
        </button>
    );
}

export default BackButton;