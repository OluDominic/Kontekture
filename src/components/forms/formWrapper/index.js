import React from 'react'
import './index.scss'

const FormWrapper=({title, msg, steps, form, back, forward})=> {

    return(
        <div className="formWrapper">
            <div className="formWrap">
                <div className="wrap">
                    <h3>{title}</h3>
                    <h5>{steps}</h5>
                </div>
                <p>{msg}</p>
            </div>
            <div className="child"><div className="child-sub">{form}</div></div>
            <div className="but">
                <div>{back}</div>
                <div>{forward}</div>
            </div>
        </div>
    );
}

export default FormWrapper