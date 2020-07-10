import React from 'react';
import '../../css/App.css';
import "../../css/animate.css"

import"../../css/owl.carousel.min.css"
import"../../css/owl.theme.default.min.css"
import"../../css/magnific-popup.css"
import"../../css/flaticon.css"
import"../../css/style.css"
import backgroundImage from '../../images/konoha.jpg'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SectionTop() {
  return (
   <div className="hero-wrap" style={{backgroundImage: `url(${backgroundImage})`, backgroundPosition: "50% -58.3906px", dataStellarBackgroundRatio: "0.5"}}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text align-items-center">
          <div className="col-md-6 ftco-animate d-flex align-items-end fadeInUp ftco-animated">
          	<div className="text w-100">
	            <h1 className="mb-4">Welcome to Konoha! The hidden leaf village.</h1>
	            <p className="mb-4">Are you ready for the chunnin exam?</p>
	            <p><a href="/" className="btn btn-primary py-3 px-4">Contact us</a> <a href="/" className="btn btn-white py-3 px-4">Read more</a></p>
            </div>
          </div>
          <a href="https://www.youtube.com/watch?v=oqBwjJCvUEo" className="img-video popup-vimeo d-flex align-items-center justify-content-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#f4511e" d="M38.647,14.934l1.208,0.979l7.974-5.948l-2.392-3.206l-5.513,4.112	c-9.622-7.035-20.525-6.43-28.113,1.702c-2.596,2.782-4.166,6.212-4.597,9.872L7.2,22.44L0.189,42h23.592h0.168	c4.183-0.019,8.324-1.667,11.304-4.86c4.688-5.023,4.571-13.181-0.259-18.183c-2.513-2.603-5.767-4.091-8.936-4.091	c-0.021,0-0.043,0-0.064,0c-2.85,0.018-5.47,1.212-7.579,3.452c-3.282,3.487-3.209,9.575,0.155,13.028	c2.53,2.598,7.094,3.633,10.058,0.774c1.123-1.083,1.683-2.752,1.498-4.464c-0.183-1.693-1.045-3.131-2.364-3.942l-1.703-1.048	l-2.097,3.407l1.703,1.048c0.247,0.152,0.438,0.531,0.484,0.967c0.051,0.47-0.069,0.934-0.298,1.154	c-1.245,1.201-3.4,0.354-4.416-0.687c-1.873-1.922-1.926-5.565-0.108-7.496c1.359-1.444,2.938-2.182,4.691-2.193	c0.014,0,0.027,0,0.04,0c2.089,0,4.294,1.044,6.057,2.87c3.319,3.437,3.416,9.242,0.212,12.676	c-4.185,4.483-11.471,4.813-16.241,0.731c-3.003-2.57-4.775-6.081-4.988-9.887c-0.207-3.684,1.085-7.219,3.638-9.955	C21.205,8.37,30.368,8.229,38.647,14.934z M13.294,38H5.872l2.485-6.931C9.404,33.684,11.076,36.049,13.294,38z"/></svg>
          </a>
        </div>
      </div>
      
    </div>
  );
}

export default SectionTop;