import React, { Suspense } from 'react';
//import Home from '../components/home';

const Home = React.lazy(()=> import('../components/home'))


const HomePage =()=> {

    return (
        <div>
            <Suspense fallback={<div><h2>Loading...</h2></div>}>
                <Home />
            </Suspense>
        </div>
    );
}

export default HomePage;