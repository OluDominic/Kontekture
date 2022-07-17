import React from 'react'
import './index.scss'

const ForwardBut=({children, otherProps})=> {

    return(

        <button className="forwardBut" {...otherProps}>
            {children}
        </button>
    );
}

export default ForwardBut;