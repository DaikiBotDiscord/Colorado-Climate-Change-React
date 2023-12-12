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
      <div className="home-hero">
        <h1 className="home-text">Colorado&apos;s Climate is being damaged</h1>
        <span className="home-text1">
          Colorado has warmed substantially in the last 30 years and even more
          over the last 50 years. Future estimates project temperatures rising
          an additional 2.5 °F to 5 °F by 2050. This means the warmest summers
          from our past may become the average summers in our future.
        </span>
        <div className="home-btn-group">
          <button className="home-button button">Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default Home
