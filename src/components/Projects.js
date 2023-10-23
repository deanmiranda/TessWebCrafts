
import React from 'react';
import './../App.css';
import projectsImage from '../images/projectsImage.png'; 

export default function Projects() {
    return (
        <div id='Projects' className='background-image' >
        <div className='projects-container container-sm d-flex justify-content-center align-items-center'style={{paddingTop: '100', borderBottom: '1px solid rgba(255, 255, 255, 0.25)'}} >
            <div className='row'>
                <div className='col-md-4 col-sm-6 mb-2 d-flex justify-content-center'>
                
                    <div className='project-1 p-2 border border-1 border-primary' style={{ height: '300px', width: '300px', margin: '100px auto', backgroundSize: 'cover', backgroundImage: `url(${projectsImage})`}}> 
                    <h1 className='text-center text-white position-absolute start-50 translate-middle fs-2 text-opacity-75' style={{ top: '25%',zIndex: 1 }}> Pet Posts</h1>
                    <div className='button-container'>
                    <a href="https://pure-bastion-75691-8de8d2af8e5c.herokuapp.com/" target="_blank">
                    <button className='btn btn-light btn-sm hidden-btn live-btn'>Live</button>
                    </a>
                    <a href="https://github.com/Project03Team04/Pet-Posts" target="_blank">
                    <button className='btn btn-light btn-sm hidden-btn repo-btn'>Repo</button>
                    </a>
                </div>
                    </div>
                  
                </div>
                <div className='col-md-4 col-sm-6 mb-2 d-flex justify-content-center'>
                    <div className='project-2 p-2 border border-1 border-primary' style={{ height: '300px', width: '300px', margin: '100px auto', backgroundSize: 'cover', backgroundImage: `url(${projectsImage})` }}>
                    <h1 className='text-center text-white position-absolute start-50 translate-middle fs-2 text-opacity-75' style={{ top: '25%',zIndex: 1 }}> Note Taker</h1>
                    <div className='button-container'>
                        <a href="https://tguils.github.io/note-taker/" target="_blank">
                    <button className='btn btn-primary btn-sm hidden-btn live-btn'>Live</button>
                    </a>
                    <a href="https://github.com/tguils/note-taker" target="_blank">
                    <button className='btn btn-light btn-sm hidden-btn repo-btn'>Repo</button>
                    </a>
                </div>
                    </div>
                </div>
                <div className='col-md-4 col-sm-6 mb-2 d-flex justify-content-center'>
                    <div className='project-3 p-2 border border-1 border-primary' style={{ height: '300px', width: '300px', margin: '100px auto', backgroundSize: 'cover', backgroundImage: `url(${projectsImage})` }}>
                    <h1 className='text-center text-white position-absolute start-50 translate-middle fs-2 text-opacity-75' style={{ top: '25%',zIndex: 1 }}> E-Commerce </h1>
                    <div className='button-container'>
                    <a href="https://drive.google.com/file/d/1YTPU-4BK1BgtORGAImJypQGy7qoLq7lY/view" target="_blank">
                    <button className='btn btn-primary btn-sm hidden-btn live-btn'>Live</button>
                    </a>
                    <a href="https://github.com/tguils/E-Commerce-ORM" target="_blank">
                    <button className='btn btn-light btn-sm hidden-btn repo-btn'>Repo</button>
                    </a>
                </div>
                    </div>
                </div>
                <div className='col-md-6 col-sm-12 mb-2 d-flex justify-content-center'>
                    <div className='project-4 p-2 border border-1 border-primary' style={{ height: '300px', width: '300px', margin: '100px auto', backgroundSize: 'cover', backgroundImage: `url(${projectsImage})` }}>
                    <h1 className='text-center text-white position-absolute start-50 translate-middle fs-2 text-opacity-75' style={{ top: '25%',zIndex: 1 }}> Tech Blog</h1>
                    <div className='button-container'>
                    <a href="https://mvc-techblog1-0950fd193a34.herokuapp.com/" target="_blank">
                    <button className='btn btn-primary btn-sm hidden-btn live-btn'>Live</button>
                    </a>
                    <a href="https://github.com/tguils/MVC-tech" target="_blank">
                    <button className='btn btn-light btn-sm hidden-btn repo-btn'>Repo</button>
                    </a>
                </div>
                    </div>
                </div>
                <div className='col-md-6 col-sm-12 mb-2 d-flex justify-content-center'>
                    <div className='project-5 p-2 border border-1 border-primary' style={{ height: '300px', width: '300px',  margin: '100px auto', backgroundSize: 'cover', backgroundImage: `url(${projectsImage})` }}>
                    <h1 className='text-center text-white position-absolute start-50 translate-middle fs-2 text-opacity-75' style={{ top: '25%',zIndex: 1 }}> Text Editor</h1>
                    <div className='button-container'>
                    <a href="https://note-taker-pwa-5cd1a5358da3.herokuapp.com/" target="_blank">
                    <button className='btn btn-primary btn-sm hidden-btn live-btn'>Live</button>
                    </a>
                    <a href="https://github.com/tguils/PWA" target="_blank">
                    <button className='btn btn-light btn-sm hidden-btn repo-btn'>Repo</button>
                    </a>
                </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}