import React from 'react'
import './index.scss'

const BackButton=({children, otherProps, handleClick, disabled})=> {

    return(

        <button disabled={disabled} className="backButton" onClick={handleClick} {...otherProps}>
            {children}
        </button>
    );
}

export default BackButton;