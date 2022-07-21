import React from 'react'
import './index.scss'

const ForwardBut=({children, otherProps, disabled, handleClick})=> {

    return(

        <button className="forwardBut" disabled={disabled} onClick={handleClick} {...otherProps}>
            {children}
        </button>
    );
}

export default ForwardBut;