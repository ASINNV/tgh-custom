import React, { Component } from 'react';
import logo from './images/alpha_color.svg';
import './App.css';
import Carousel from './Components/Carousel.js';

import { connect } from "react-redux";

class App extends Component {

  componentDidMount() {}

  componentWillUnmount() {}

  showContextMenu(e) {
    let target = e.target;
    console.log(target.parentNode);
    // while (target.className !== "top-li") {
    //   let target = target.parentNode;
    // }
    // console.log(target, " is the target");
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
            <li className="top-li" onMouseOver={this.showContextMenu.bind(this)}>
              <a href="" className="">HOTEL</a>
              <ul className="">
                <li><a href="" className="">ACCOMMODATIONS</a></li>
                <li><a href="" className="">AMENITIES</a></li>
                <li><a href="" className="">LOCAL ATTRACTIONS</a></li>
              </ul>
            </li>
            <li className="top-li" onMouseOver={this.showContextMenu.bind(this)}>
              <a href="" className="">RESTAURANT & SALOON</a>
              <ul className="">
                <li><a href="" className="">BEER & WINE LIST</a></li>
                <li><a href="" className="">MENU</a></li>
                <li><a href="" className="">SPECIAL EVENTS/CATERING</a></li>
                <li><a href="" className="">LOCAL PARTNERS</a></li>
              </ul>
            </li>
            <li><a href="" className="">EVENTS</a></li>
            <li><a href="" className="">MERCANTILE</a></li>
            <li className="top-li" onMouseOver={this.showContextMenu.bind(this)}>
              <a href="" className="">ABOUT US</a>
              <ul className="">
                <li><a href="" className="">HISTORY</a></li>
                <li><a href="" className="">CAREERS</a></li>
                <li><a href="" className="">MISSION STATEMENT/VISION</a></li>
              </ul>
            </li>
            <li><a href="" className="">CONTACT</a></li>
          </ul>
        </div>
        
        {/* header carousel */}
        <Carousel/>

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
