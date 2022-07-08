import React from 'react'
import Button from './../Button'
import './index.scss'

const SubscriptionForm =({title, but})=> {

    return(
        <div className="subscriptionForm">
            <div className="sub">
                <h2>{title}</h2>
                <div className="formSub">
                    <input
                    type="email"
                    placeholder="Enter your email..."
                    />
                    <Button>
                        {but}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default SubscriptionForm;