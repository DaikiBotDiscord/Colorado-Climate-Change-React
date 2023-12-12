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
            <a href="#stats" className="home-link button">
              Learn More
            </a>
          </div>
        </div>
        <h1 className="home-text06">
          <span>Colorado Climate Risk Rankings</span>
          <br></br>
        </h1>
        <div id="stats" className="home-stats">
          <div className="home-stat">
            <h1 className="home-text09">#11</h1>
            <span className="home-text10">
              <span>Fire Risk</span>
              <br></br>
            </span>
            <span className="home-text13">
              <span>Highest fire risk: Oklahoma and Wyoming</span>
              <br></br>
              <span>Lowest fire risk: Maine and Vermont</span>
            </span>
          </div>
          <div className="home-stat1">
            <h1 className="home-text17">#23</h1>
            <span className="home-text18">Heat Risk</span>
            <span className="home-text19">
              <span>Highest heat risk: Louisiana and Mississippi</span>
              <br></br>
              <span>Lowest heat risk: California and Oregon</span>
            </span>
          </div>
          <div className="home-stat2">
            <h1 className="home-text23">#42</h1>
            <span className="home-text24">
              <span className="home-text25">Storm Risk</span>
              <br></br>
            </span>
            <span className="home-text27">
              <span>Highest storm risk: Rhode Island and New York</span>
              <br></br>
              <span>Lowest storm risk: Nevada and Arizona</span>
            </span>
          </div>
          <div className="home-stat3">
            <h1 className="home-text31">#43</h1>
            <span className="home-text32">
              <span className="home-text33">Flood Risk</span>
              <br></br>
            </span>
            <span className="home-text35">
              <span>Highest flood risk: Arizona and West Virginia</span>
              <br></br>
              <span>Lowest flood risk: Utah and Nevada</span>
            </span>
          </div>
        </div>
        <h1 className="home-text39">
          <span>Heat Risk in Colorado with Climate Change</span>
          <br></br>
        </h1>
        <span className="home-text42">
          <span>
            An extremely hot day in Colorado depends on your location: 98ºF is
            extremely hot for Pueblo, while 87ºF is considered extremely hot for
            Durango.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            This is based on historical maximum temperatures on the top 2% of
            days in an average year.
          </span>
        </span>
        <div className="home-stats1">
          <div className="home-stat4">
            <h1 className="home-text46">99°F</h1>
            <span className="home-text47">
              <span>#1 Hottest Cities</span>
              <br></br>
            </span>
            <span className="home-text50">Grand Junction, Pueblo</span>
          </div>
          <div className="home-stat5">
            <h1 className="home-text51">96°F</h1>
            <span className="home-text52">
              <span className="home-text53">#2 Hottest City</span>
              <br></br>
            </span>
            <span className="home-text55">Greeley</span>
          </div>
          <div className="home-stat6">
            <h1 className="home-text56">94°F</h1>
            <span className="home-text57">
              <span>#3 Hottest Cities</span>
              <br></br>
            </span>
            <span className="home-text60">Denver, Montrose</span>
          </div>
          <div className="home-stat7">
            <h1 className="home-text61">93-90°F</h1>
            <span className="home-text62">
              <span>#4-7 Hottest Cities</span>
              <br></br>
            </span>
            <span className="home-text65">
              <span>
                Fort Collins, Boulder, Castle Rock, Colorado Springs, Durango
              </span>
              <br></br>
            </span>
          </div>
        </div>
      </div>
      <div className="home-hero1">
        <div className="home-container2">
          <h1 className="home-text68">Precipitation Risk in Colorado</h1>
          <span className="home-text69">
            <span>
              Historically, Denver experienced an average of 0.6 inches of rain
              about 10 times per year. In 2050, it is projected to experience an
              average of 0.6 inches of rain about 11 times per year.
            </span>
            <br></br>
            <br></br>
            <span>
              Historically, Pueblo experienced an average of 0.6 inches of rain
              about 9 times per year. In 2050, it is projected to experience an
              average of 0.5 inches of rain about 10 times per year.
            </span>
          </span>
        </div>
        <img
          alt="image"
          src="/5106fdbdac1f973d6ec7544b5e3ea149e94d93d2-2200x1420-1500h.webp"
          className="home-image"
        />
      </div>
    </div>
  )
}

export default Home
