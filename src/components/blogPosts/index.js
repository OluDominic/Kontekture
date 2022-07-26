import React from 'react'
import { useParams } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Pic1 from './../../assets/blogposts/image 10.jpg'
import Pic2 from './../../assets/blogposts/image 20.jpg'
import Pic3 from './../../assets/blogposts/image 21.jpg'

import Update from './../../assets/blogposts/image 19.jpg'

import Recent1 from './../../assets/blogposts/image 16.jpg'
import Recent2 from './../../assets/blogposts/image 17.jpg'
import Comments from '../comments';
import Button from './../forms/Button'

const RecentPost =({icon, title})=> {
    return (
        <div className="recentPost">
            <div className="icon">{icon}</div>
            <label>{title}</label>
        </div>
    );
}

const BlogPosts =()=> {
    const params = useParams();
    const { blogId } = params;
    console.warn(blogId)
    return(
        <div className="blogposts">
            <div className="blogposts-sub1">
                
                    <div className="post-kont">
                        <div className="kont1">
                            <h2>Fifteen things to know about Alucobond wall cladding in Nigeria.</h2>
                            <div className="timeframe">
                                <p>July 20, 2021 </p>
                                <span></span>
                                <p> 4 Mins read</p>
                            </div>
                            <div className="share">
                                <p>Share via: </p>
                                <span><FontAwesomeIcon icon={faFacebook} /></span>
                                <span><FontAwesomeIcon icon={faTwitter} /> </span>
                                <span><FontAwesomeIcon icon={faInstagram} /> </span>
                            </div>
                        </div>
                    </div>

                    <div className="div">
                        <div className="write-up">
                            <div className="notes">
                                <div className="pic1"><img src={Pic1} alt="pic1" /></div>
                                <p>Some call it Alucoboard, Alucobond, acoboards, acobond or while others just call it cladding boards. They are all referring to aluminium composite panels.</p>
                                <p>ALUCOBOND which is manufactured by 3A Composites® just happens to be among the oldest brands in ACP and made the early entrant into the Nigerian building industry. So the name of the brand ended up being used to describe the product. </p>
                                <p>1. In this article we will show everything you need to know about Alucobond cladding in Nigeria. Regarding its specifications, how it’s installed, how to calculate the quantities, how to negotiate the pricing, what it can be used to accopmplish, and advantages of using it over other cladding options. The post will be filled with images, so you’ll grasp easch point easily. Kindly note that all the images used in this post are from Kontekture projects.</p>
                                <div className="pic2"><img src={Pic2} alt="pic3" /></div>
                                <p>2. They come in various colours, textures and reflections to give you great aesthetics. There are standard colours like yellow, blue, green and they all come in satin and glossy. There are finishes that look just like wood, bricks, etec. There are mirro colours like mirro silver, mirror gold which are both higly reflrective. There are the textured panels which have grains, and so other patterns like wood.</p>
                                <div className="pic3"><img src={Pic3} alt="pic3" /></div>
                            </div>
                            <div className="line"></div>
                        </div>
                        <div className="reply">
                            <h3>Leave a reply</h3>
                            <p>Your email address will not be published. Required fields are marked *</p>
                            <div className="form">
                                <div className="comment">
                                    <Comments 
                                        type="text"
                                        placeholder="Comment"
                                    /> 
                                </div>
                                <div className="sub1">
                                    <div className="name"><Comments type="text" placeholder="Name*" /></div>
                                    <div className="email"><Comments type="text" placeholder="Email*" /></div>
                                    <div className="website"><Comments type="text" placeholder="Website" /></div>
                                </div>
                                <div className="check">
                                    <div className="checkbox"><Comments type="checkbox" /></div>
                                    <p>Save my name, email, and website in this browser for the next time I comment.</p>
                                    <div className="but"><Button>Post comment</Button></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="post-side">
                        <div className="announce">
                            <div className="announcement">
                                <div className="announce-write">Announcement</div>
                                <div className="announce-pic">
                                    <img src={Update} alt="update"/>
                                </div>
                                <div className="announce-write">Introducing the max</div>
                            </div>
                            <div className="stay-updated">
                                <div className="update">Stay updated</div>
                                <div className="update-sub">
                                    <input
                                        type="email"
                                        placeholder="Enter your email..."
                                        />
                                        <Button>
                                            Subscribe
                                        </Button>
                                </div>
                            </div>
                            <div className="recent">
                                <label>recent post</label>
                                <RecentPost 
                                    icon={<img src={Recent1} alt="revent1" />}
                                    title="The fifteen greatest shipping container homes on the planet"
                                />
                                <RecentPost 
                                    icon={<img src={Recent2} alt="revent2" />}
                                    title="Qatar unveil movable 40,000 seat stadium built from shipping container for 2022 world cup."
                                />
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default BlogPosts