import React from 'react'
import SubscriptionForm from './../forms/SubscriptionForm';
import './index.scss'

const Media =()=> {

    return (
        <div className="media">
            <div className="media-kont">
                <h2>Kontekture Media</h2>
                <p>Check for our latest news and features about Kontekture changing the way construction is experienced.</p>
            </div>
            <div className="mediaForm">
                <SubscriptionForm
                title="Get the latest news and features on Kontekture in your inbox."
                but="SUBSCRIBE"
                />
            </div>
        </div>
    );
}

export default Media;