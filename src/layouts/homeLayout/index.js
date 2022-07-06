import React from 'react';
import Collections from '../../components/collections';
import Footer from '../../components/footer';
import Header from '../../components/header';
import { HomePage } from '../../pages';


const HomeLay =()=> {
    return (
        <div>
                <Header />
                <HomePage />
                <Collections />
                <Footer />
        </div>
    );
}

export default HomeLay;