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
            <h1 className="home-text06">#11</h1>
            <span className="home-text07">
              <span>Fire Risk</span>
              <br></br>
            </span>
            <span className="home-text10">
              <span>Highest fire risk: Oklahoma and Wyoming</span>
              <br></br>
              <span>Lowest fire risk: Maine and Vermont</span>
            </span>
          </div>
          <div className="home-stat1">
            <h1 className="home-text14">#23</h1>
            <span className="home-text15">Heat Risk</span>
            <span className="home-text16">
              <span>Highest heat risk: Louisiana and Mississippi</span>
              <br></br>
              <span>Lowest heat risk: California and Oregon</span>
            </span>
          </div>
          <div className="home-stat2">
            <h1 className="home-text20">#42</h1>
            <span className="home-text21">
              <span className="home-text22">Storm Risk</span>
              <br></br>
            </span>
            <span className="home-text24">
              <span>Highest storm risk: Rhode Island and New York</span>
              <br></br>
              <span>Lowest storm risk: Nevada and Arizona</span>
            </span>
          </div>
          <div className="home-stat3">
            <h1 className="home-text28">#43</h1>
            <span className="home-text29">
              <span className="home-text30">Flood Risk</span>
              <br></br>
            </span>
            <span className="home-text32">
              <span>Highest flood risk: Arizona and West Virginia</span>
              <br></br>
              <span>Lowest flood risk: Utah and Nevada</span>
            </span>
          </div>
        </div>
        <h1 className="home-text36">
          <span>Heat Risk in Colorado with Climate Change</span>
          <br></br>
        </h1>
        <span className="home-text39">
          An extremely hot day in Colorado depends on your location: 98ºF is
          extremely hot for Pueblo, while 87ºF is considered extremely hot for
          Durango. This is based on historical maximum temperatures on the top
          2% of days in an average year.
        </span>
        <div className="home-stats1">
          <div className="home-stat4">
            <h1 className="home-text40">99°F</h1>
            <span className="home-text41">
              <span>#1 Hottest Cities</span>
              <br></br>
            </span>
            <span className="home-text44">Grand Junction, Pueblo</span>
          </div>
          <div className="home-stat5">
            <h1 className="home-text45">96°F</h1>
            <span className="home-text46">
              <span className="home-text47">#2 Hottest City</span>
              <br></br>
            </span>
            <span className="home-text49">Greeley</span>
          </div>
          <div className="home-stat6">
            <h1 className="home-text50">94°F</h1>
            <span className="home-text51">
              <span>#3 Hottest Cities</span>
              <br></br>
            </span>
            <span className="home-text54">Denver, Montrose</span>
          </div>
          <div className="home-stat7">
            <h1 className="home-text55">93-90°F</h1>
            <span className="home-text56">
              <span>#4-7 Hottest Cities</span>
              <br></br>
            </span>
            <span className="home-text59">
              <span>
                Fort Collins, Boulder, Castle Rock, Colorado Springs, Durango
              </span>
              <br></br>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
