import React, {useEffect, useState} from 'react'
import SubscriptionForm from './../forms/SubscriptionForm';
import moment from 'moment'
// import Pic1 from './../../assets/blogs/image 27.jpg'
// import Pic2 from './../../assets/blogs/image 17.jpg'
// import Pic3 from './../../assets/blogs/image 15.jpg'
// import Pic4 from './../../assets/blogs/image 16.jpg'
// import Pic5 from './../../assets/blogs/image 14.jpg'
// import Pic6 from './../../assets/blogs/image 11.jpg'
import './index.scss'

import {database} from '../../firebase/firebase'
import { ref, onValue } from 'firebase/database'
import { Link } from 'react-router-dom'

const BlogPosts=({icon, date, title})=> {
    return(
        <div className="blogPosts">
            <div className="blog-icon">{icon}</div>
            <div className="blog-date">{date}</div>
            <div className="blog-title">
                <ul>
                    <li>
                        <Link to="">{title}</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

const db = database;

const Blogs =()=> {
    const [data, setData] = useState([])

    useEffect(()=> {
        const dbRef = ref(db, 'blogpost');

        onValue(dbRef, (snapshot)=> {
            let records = [];
            snapshot.forEach(childSnapshot=> {
                let keyName = childSnapshot.key
                let data = childSnapshot.val();
                records.push({"key": keyName, "data": data})
            })
            console.log(data[0])
            setData(records)
        })
    },[])

    return (
        <div className="blogs">
            <div className="kont-blog">
                <div>
                    <h2>Kontekture Blog</h2>
                    <p>Check for announcements, stories and technical posts about sustainable housing and everything construction.</p>
                </div>
            </div>
            <div className="blog-posts">
                {data && data.map((rowdata)=> {
                    return (<BlogPosts 
                    icon={<img src={rowdata.data.url} alt="pic2" /> }
                    date={rowdata.data.date}
                    title={
                        <ul>
                        <li>
                            <Link to={rowdata.key}>{rowdata.data.title}</Link>
                        </li>
                    </ul>}
                />
                    );
                })}
                
                {/* <BlogPosts 
                    icon={<img src={Pic1} alt="pic1" /> }
                    date={moment(date).format('MMMM Do YYYY')}
                    title="Sixteen things you should know about shipping container housing in Niigeria. "
                />
                <BlogPosts 
                    icon={<img src={Pic3} alt="pic3" /> }
                    date={moment(date).format('MMMM Do YYYY')}
                    title="Shipping container housig in Nigeria (Project progress)."
                />
                <BlogPosts 
                    icon={<img src={Pic4} alt="pic4" /> }
                    date={moment(date).format('MMMM Do YYYY')}
                    title="The fifteen greatest shipping container homes on the planet"
                />
                <BlogPosts 
                    icon={<img src={Pic5} alt="pic5" /> }
                    date={moment(date).format('MMMM Do YYYY')}
                    title="Qatar unveil movable 40,000 seat stadium built from shipping container for 2022 world cup."
                />
                <BlogPosts 
                    icon={<img src={Pic6} alt="pic6" /> }
                    date={moment(date).format('MMMM Do YYYY')}
                    title="The dairy of a container house project in Lagos, Nigeria."
                /> */}
            </div>
            <div className="subForm">
                <SubscriptionForm
                title="Subscribe to get our latest insights on everything construction."
                but="SUBSCRIBE"
                />
            </div>
        </div>
    );
}

export default Blogs;