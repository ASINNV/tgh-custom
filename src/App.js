import React, { Component } from 'react';
import logo from './images/alpha_color.svg';
import './App.css';

import { connect } from "react-redux";

const activateCarousel = function () {
  let carousel = document.getElementById('home-carousel');
  let carouselBox = carousel.getBoundingClientRect();
  let images = carousel.childNodes;

  let existingValue = carousel.style.transform !== '' ? Number(carousel.style.transform.slice(11, -3)) : 0;
  let horizontalOffset = existingValue - carouselBox.width;
  let displacementLimit = (carouselBox.width * (images.length - 1)) * -1;

  if (horizontalOffset >= displacementLimit) { // Greater than or equal to is used here because we're dealing with negatives
    carousel.style.transform = "translateX(" + (existingValue - carouselBox.width) + "px)";
  } else {
    carousel.style.transform = "";
  }
};

class App extends Component {
  componentDidMount() {

    setInterval(activateCarousel, 5000); // start the carousel
  }

  render() {
    return (
      <div className="main">
        <header className="main-header">

          <div className="content-box main-brand">
            <div className="identity-container">
              <img src={logo} className="main-logo" alt="logo" />
            </div>
            <div className="main-info">
              <a href="tel:+15555555555" className="header-phone no-decoration">(707) 884-3441</a>
              <p className="slogan">Insert Your Slogan Here, You'll Be Glad You Did</p>
              <a className="contact-link no-decoration">CONTACT US</a>
            </div>
          </div>

        </header>

        {/* navigation menu */}
        <div className="main-nav-container">
          <ul className="main-nav content-box">
            <li>
              <a href="" className="">HOTEL</a>
              <ul className="sub-nav-hotel">
                <li><a href="" className="">ACCOMMODATIONS</a></li>
                <li><a href="" className="">AMENITIES</a></li>
                <li><a href="" className="">LOCAL ATTRACTIONS</a></li>
              </ul>
            </li>
            <li>
              <a href="" className="">RESTAURANT & SALOON</a>
              <ul className="sub-nav-restaurant">
                <li><a href="" className="">BEER & WINE LIST</a></li>
                <li><a href="" className="">MENU</a></li>
                <li><a href="" className="">SPECIAL EVENTS/CATERING</a></li>
                <li><a href="" className="">LOCAL PARTNERS</a></li>
              </ul>
            </li>
            <li><a href="" className="">EVENTS</a></li>
            <li><a href="" className="">MERCANTILE</a></li>
            <li>
              <a href="" className="">ABOUT US</a>
              <ul className="sub-nav-about">
                <li><a href="" className="">HISTORY</a></li>
                <li><a href="" className="">CAREERS</a></li>
                <li><a href="" className="">MISSION STATEMENT/VISION</a></li>
              </ul>
            </li>
            <li><a href="" className="">CONTACT</a></li>
          </ul>
        </div>
        
        {/* header carousel */}
        <div className="carousel-container">
          <div id="home-carousel" className="header-carousel">
            <img src="https://via.placeholder.com/1600x400" alt="Placeholder" className="header-image"/>
            <img src="https://via.placeholder.com/1700x450" alt="Placeholder" className="header-image"/>
            <img src="https://via.placeholder.com/1660x470" alt="Placeholder" className="header-image"/>
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    appReducer: state.appReducer
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch({
        type: "SET_NAME",
        payload: name
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
