import React from 'react';
import './../App.css';
import aboutmeImage from '../images/aboutmeImage.png';

export default function AboutMe() {
    return (
      <div id='AboutMe' className='background-image'>
        <div className='container d-flex flex-column align-items-center justify-content-center position-relative p-0' style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.25)', minHeight: '900px' }}>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <p className='fs-5 text-white text-left rounded' style={{ backgroundColor: "#1d386b" }}>
                My name is Tess, and I am a web developer in training. My educational and professional background has been in Social Work, where I have been working in the field for six years. When I'm not working or tinkering with code, I enjoy hiking, kayaking, and playing guitar and piano. In the past couple of years, I have decided to start my journey into becoming a web developer. I have enjoyed learning things on my own time, as well as, most recently, enrolling in a full stack coding bootcamp. I am expected to earn my certificate in September of 2023 after completing the course. This new path has been an exciting transition and experience for me. Please visit my LinkedIn page and GitHub below.
              </p>
            </div>
            <div className="col-md-6 d-flex justify-content-end">
              <div className="d-flex align-items-center" style={{ height: '350px', width: '350px', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(${aboutmeImage})` }}>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }