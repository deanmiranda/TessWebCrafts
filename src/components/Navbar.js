import React from 'react';
import './../App.css';

export default function Navbar() {
    return (
    <nav className="navbar navbar-expand-md navbar-dark top-0 shadow-md p-4 fixed-top" style={{ backgroundColor: "#1d386b" }}>
    <div className="container">
    <a className="navbar-brand text-gray-800 fs-1 font-weight-bold" style={{ color: "#F0EB8D" }}>My Portfolio</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
            <a href="#Home" className="text-gray-800 fs-4 nav-link" style={{ color: "F0EB8D" }}>Home</a>
            </li>
            <li className="nav-item">
            <a href="#Projects" className="text-gray-800 fs-4 nav-link" style={{ color: "F0EB8D" }}>Projects</a>
            </li>
            <li className="nav-item">
            <a href="#AboutMe" className="text-gray-800 fs-4 nav-link" style={{ color: "F0EB8D" }}>About Me</a>
            </li>
            <li className="nav-item">
            <a href="#Contact" className="text-gray-800 fs-4 nav-link" style={{ color: "F0EB8D" }}>Contact</a>
            </li>
          </ul>
        </div>
        </div>
      
      </nav>
    );
  }
        