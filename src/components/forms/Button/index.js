import React from 'react'
import './index.scss'

const Button=({children, otherProps, handleClick})=> {

    return(

        <button className="button" onClick={handleClick} {...otherProps}>
            {children}
        </button>
    );
}

export default Button;