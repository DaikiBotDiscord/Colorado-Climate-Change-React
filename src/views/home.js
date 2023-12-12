import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Colorado Climate Change</title>
        <meta property="og:title" content="Colorado Climate Change" />
      </Helmet>
      <Header></Header>
      <div className="home-container1">
        <div className="home-hero">
          <h1 className="home-text">
            Colorado&apos;s Climate is being damaged
          </h1>
          <span className="home-text01">
            <span>
              Climate in Colorado has been changing for a long time. It is
              quickly starting to cause damage and we should be concerned.
            </span>
            <br></br>
            <span>
              There are ways we can help prevent our climate from dying even
              more.
            </span>
            <br></br>
          </span>
          <div className="home-btn-group">
            <button className="home-button button">Learn More</button>
          </div>
        </div>
        <div className="home-stats">
          <div className="home-stat">
            <h1 className="home-text06">2.5-5°F</h1>
            <span className="home-text07">
              <span>Temperature Increase</span>
              <br></br>
            </span>
            <span className="home-text10">
              Future estimates project temperatures rising an additional 2.5 °F
              to 5 °F by 2050. This means the warmest summers from our past may
              become the average summers in our future.
            </span>
          </div>
          <div className="home-stat1">
            <h1 className="home-text11">
              <span>369</span>
            </h1>
            <span className="home-text13">Projects completed</span>
            <span className="home-text14">
              Lorem ipsum dolor sit amet, consectetur adipiscing.
            </span>
          </div>
          <div className="home-stat2">
            <h1 className="home-text15">
              <span>500</span>
              <span>+</span>
            </h1>
            <span className="home-text18">Hours</span>
            <span className="home-text19">
              Lorem ipsum dolor sit amet, consectetur adipiscing.
            </span>
          </div>
          <div className="home-stat3">
            <h1 className="home-text20">
              <span>24/7</span>
            </h1>
            <span className="home-text22">Support</span>
            <span className="home-text23">
              Lorem ipsum dolor sit amet, consectetur adipiscing.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
