import React from 'react'
import './index.scss'

const FormInput =({label, value, handleChange, ...otherProps})=> {


    return (
        <div className="form">
            {label && (
                <label>
                    {label}
                </label>
            )}
            <input className="formInput" value={value} onChange={handleChange} {...otherProps} />
        </div>
    );

}

export default FormInput