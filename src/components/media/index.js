import React from 'react'
import SubscriptionForm from './../forms/SubscriptionForm';
import './index.scss'
import Media1 from './../../assets/media/image 22.jpg'
import Media2 from './../../assets/media/image 23.jpg'
import Media3 from './../../assets/media/image 25.jpg'
import Media4 from './../../assets/media/image 24.jpg'
import Media5 from './../../assets/media/image 26.jpg'
import Media6 from './../../assets/media/image 22.jpg'

const MediaGallery =({icon, text, msg})=> {

    return(
        <div className="mediaGallery">
            <div>
                <div className="gallery-icon">{icon}</div>
                <div className="gallery-text"><div>{text}</div></div>
            </div>
            <div className="gallery-msg">{msg}</div>
        </div>
    )
}

const Media =()=> {

    return (
        <div className="media">
            <div className="media-kont">
                <div>
                <h2>Kontekture Media</h2>
                <p>Check for our latest news and features about Kontekture changing the way construction is experienced.</p>
                </div>
            </div>
            <div className="gallery">
                <MediaGallery 
                    icon={<img src={Media1} alt="media1" /> }
                    text="Aticle"
                    msg="Eco-friendly houses in Nigeria"
                />
                <MediaGallery 
                    icon={<img src={Media2} alt="media2" /> }
                    text="Video"
                    msg="Container housing interview with DWtv"
                />
                <MediaGallery 
                    icon={<img src={Media3} alt="media3" /> }
                    text="Video"
                    msg="Access Bank Closa"
                />
                <MediaGallery 
                    icon={<img src={Media4} alt="media4" /> }
                    text="Video"
                    msg="Access Bank Closa"
                />
                <MediaGallery 
                    icon={<img src={Media5} alt="media5" /> }
                    text="Article"
                    msg="Container housing interview with DWtv"
                />
                <MediaGallery 
                    icon={<img src={Media6} alt="media6" /> }
                    text="Video"
                    msg="Eco-friendly houses in Nigeria"
                />
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