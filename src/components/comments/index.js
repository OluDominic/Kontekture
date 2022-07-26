import React from 'react'
import './index.scss'


const Comments =({ value, handleChange, ...otherProps})=> {


    return (
        <div className="commentss">
            <input className="formInput" value={value} onChange={handleChange} {...otherProps} />
        </div>
    );

}

export default Comments

