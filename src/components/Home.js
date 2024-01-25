import React from 'react';

import './../App.css';

export default function Home() {
    return (
        <div id='Home' className='container-sm d-flex align-items-center justify-content-center position-relative p-0' style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.25)', height: '900px' }}>
            <div className='text-left' style={{fontWeight: 'bold'}}>
                <div className='fs-1' style={{ color: "#F0EB8D"}}>Welcome</div>
                <p className='fs-4 mt-1 text-white'>Please enjoy my portfolio where you will find out about me and my work as a front-end developer</p>
                <p className='fs-4 mt-1 text-white text-opacity-75'>JavaScript - React - Express JS - JQuery - CSS - HTML - MVC - SQL - PWA </p>
            </div>
        </div>
    );
}