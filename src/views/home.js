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
            Colorado&apos;s Climate is being Damaged
          </h1>
          <span className="home-text01">
            <span>
              Colorado&apos;s climate has undergone changes and is showing signs
              of damage, but we can contribute to protecting it.
            </span>
            <br></br>
          </span>
          <div className="home-btn-group">
            <a href="#stats" className="home-link button">
              Learn More
            </a>
          </div>
        </div>
        <h1 id="stats" className="home-text04">
          <span>Colorado Climate Risk Rankings</span>
          <br></br>
        </h1>
        <div className="home-stats">
          <div className="home-stat">
            <h1 className="home-text07">#11</h1>
            <span className="home-text08">
              <span>Fire Risk</span>
              <br></br>
            </span>
            <span className="home-text11">
              <span>Highest fire risk: Oklahoma and Wyoming</span>
              <br></br>
              <span>Lowest fire risk: Maine and Vermont</span>
            </span>
          </div>
          <div className="home-stat1">
            <h1 className="home-text15">#23</h1>
            <span className="home-text16">Heat Risk</span>
            <span className="home-text17">
              <span>Highest heat risk: Louisiana and Mississippi</span>
              <br></br>
              <span>Lowest heat risk: California and Oregon</span>
            </span>
          </div>
          <div className="home-stat2">
            <h1 className="home-text21">#42</h1>
            <span className="home-text22">
              <span className="home-text23">Storm Risk</span>
              <br></br>
            </span>
            <span className="home-text25">
              <span>Highest storm risk: Rhode Island and New York</span>
              <br></br>
              <span>Lowest storm risk: Nevada and Arizona</span>
            </span>
          </div>
          <div className="home-stat3">
            <h1 className="home-text29">#43</h1>
            <span className="home-text30">
              <span className="home-text31">Flood Risk</span>
              <br></br>
            </span>
            <span className="home-text33">
              <span>Highest flood risk: Arizona and West Virginia</span>
              <br></br>
              <span>Lowest flood risk: Utah and Nevada</span>
            </span>
          </div>
        </div>
        <h1 className="home-text37">
          <span>Heat Risk in Colorado with Climate Change</span>
          <br></br>
        </h1>
        <span className="home-text40">
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
            <h1 className="home-text44">99°F</h1>
            <span className="home-text45">
              <span>#1 Hottest Cities</span>
              <br></br>
            </span>
            <span className="home-text48">Grand Junction, Pueblo</span>
          </div>
          <div className="home-stat5">
            <h1 className="home-text49">96°F</h1>
            <span className="home-text50">
              <span className="home-text51">#2 Hottest City</span>
              <br></br>
            </span>
            <span className="home-text53">Greeley</span>
          </div>
          <div className="home-stat6">
            <h1 className="home-text54">94°F</h1>
            <span className="home-text55">
              <span>#3 Hottest Cities</span>
              <br></br>
            </span>
            <span className="home-text58">Denver, Montrose</span>
          </div>
          <div className="home-stat7">
            <h1 className="home-text59">93-90°F</h1>
            <span className="home-text60">
              <span>#4-7 Hottest Cities</span>
              <br></br>
            </span>
            <span className="home-text63">
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
          <h1 className="home-text66">Precipitation Risk in Colorado</h1>
          <span className="home-text67">
            <span className="home-text68">Denver</span>
            <span className="home-text69">
              {' '}
              on average had 0.6 inches of rain about 10 times per year. In
              2050, it&apos;s projected to rain on average 0.6 inches of rain
              about 11 times per year.
            </span>
            <br></br>
            <br></br>
            <br></br>
            <span className="home-text73">Durango</span>
            <span>
              {' '}
              on average had 1.1 inches of rain about 10 times in 2022. In 2050,
              it&apos;s projected to rain on average of 1.3 inches 13 times.
            </span>
            <br></br>
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
