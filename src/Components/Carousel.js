import React, { Component } from 'react';


var carouselIntervalId = null;

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

export default class Carousel extends Component {

  componentDidMount() {
    carouselIntervalId = setInterval(activateCarousel, 5000); // start the carousel
  }

  componentWillUnmount() {
    if (carouselIntervalId !== null) {
      clearInterval(carouselIntervalId);
    }
  }

  render() {
    return (
      <div className="carousel-container">
        <div id="home-carousel" className="header-carousel">
          <img src="https://via.placeholder.com/1600x400" alt="Placeholder" className="header-image"/>
          <img src="https://via.placeholder.com/1700x450" alt="Placeholder" className="header-image"/>
          <img src="https://via.placeholder.com/1660x470" alt="Placeholder" className="header-image"/>
        </div>
      </div>
    );
  }
}