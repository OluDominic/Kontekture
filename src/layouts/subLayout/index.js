import React from 'react'
import Header from '../../components/header';

const SubLayout =(props)=> {

    return (
        <div>
            <Header />
            {props.children}
        </div>
    );
}

export default SubLayout;