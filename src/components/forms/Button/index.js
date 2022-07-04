import React from 'react'
import './index.scss'

const Button=({children, otherProps})=> {

    return(

        <button className="button" {...otherProps}>
            {children}
        </button>
    );
}

export default Button;