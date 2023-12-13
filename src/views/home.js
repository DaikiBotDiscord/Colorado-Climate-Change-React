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
          <span className="home-text001">
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
        <h1 id="stats" className="home-text004">
          <span>Colorado Climate Risk Rankings</span>
          <br></br>
        </h1>
        <div className="home-stats">
          <div className="home-stat">
            <h1 className="home-text007">#11</h1>
            <span className="home-text008">
              <span>Fire Risk</span>
              <br></br>
            </span>
            <span className="home-text011">
              <span>Highest fire risk: Oklahoma and Wyoming</span>
              <br></br>
              <span>Lowest fire risk: Maine and Vermont</span>
            </span>
          </div>
          <div className="home-stat1">
            <h1 className="home-text015">#23</h1>
            <span className="home-text016">Heat Risk</span>
            <span className="home-text017">
              <span>Highest heat risk: Louisiana and Mississippi</span>
              <br></br>
              <span>Lowest heat risk: California and Oregon</span>
            </span>
          </div>
          <div className="home-stat2">
            <h1 className="home-text021">#42</h1>
            <span className="home-text022">
              <span className="home-text023">Storm Risk</span>
              <br></br>
            </span>
            <span className="home-text025">
              <span>Highest storm risk: Rhode Island and New York</span>
              <br></br>
              <span>Lowest storm risk: Nevada and Arizona</span>
            </span>
          </div>
          <div className="home-stat3">
            <h1 className="home-text029">#43</h1>
            <span className="home-text030">
              <span className="home-text031">Flood Risk</span>
              <br></br>
            </span>
            <span className="home-text033">
              <span>Highest flood risk: Arizona and West Virginia</span>
              <br></br>
              <span>Lowest flood risk: Utah and Nevada</span>
            </span>
          </div>
        </div>
        <h1 className="home-text037">
          <span>Heat Risk in Colorado with Climate Change</span>
          <br></br>
        </h1>
        <span className="home-text040">
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
            <h1 className="home-text044">99°F</h1>
            <span className="home-text045">
              <span>#1 Hottest Cities</span>
              <br></br>
            </span>
            <span className="home-text048">Grand Junction, Pueblo</span>
          </div>
          <div className="home-stat5">
            <h1 className="home-text049">96°F</h1>
            <span className="home-text050">
              <span className="home-text051">#2 Hottest City</span>
              <br></br>
            </span>
            <span className="home-text053">Greeley</span>
          </div>
          <div className="home-stat6">
            <h1 className="home-text054">94°F</h1>
            <span className="home-text055">
              <span>#3 Hottest Cities</span>
              <br></br>
            </span>
            <span className="home-text058">Denver, Montrose</span>
          </div>
          <div className="home-stat7">
            <h1 className="home-text059">93-90°F</h1>
            <span className="home-text060">
              <span>#4-7 Hottest Cities</span>
              <br></br>
            </span>
            <span className="home-text063">
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
          <h1 className="home-text066">Precipitation Risk in Colorado</h1>
          <span className="home-text067">
            <span className="home-text068">Denver</span>
            <span className="home-text069">
              {' '}
              on average had 0.6 inches of rain about 10 times per year. In
              2050, it&apos;s projected to rain on average 0.6 inches of rain
              about 11 times per year.
            </span>
            <br></br>
            <br></br>
            <br></br>
            <span className="home-text073">Durango</span>
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
      <div className="home-hero2">
        <img
          alt="image"
          src="/fb53464364807bd021c623177315ed3693243e10-2400x1300-1500h.webp"
          className="home-image1"
        />
        <div className="home-container3">
          <h1 className="home-text076">Fire Risk in Colorado</h1>
          <span className="home-text077">
            <span>
              Fire risk depends on the type of vegetations and other land cover
              in the area, and topography. Fire risk is greatly increased in the
              presence of a
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text079">red flag warning</span>
            <span>, when heat, low humidity, and strong winds converge.</span>
            <br></br>
            <br></br>
            <span>
              One of the areas, with the lowest fire risk, is Greeley. One of
              the areas with the highest fire risk is Castle Rock and this is
              due to the amount of crops and vegetation in the area
            </span>
            <br></br>
          </span>
        </div>
      </div>
      <div className="home-container4">
        <h1 id="challenges" className="home-text085">
          <span>
            Colorado Climate Challenges
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
        </h1>
        <div className="home-testimonial">
          <div className="home-container5">
            <div className="home-container6">
              <div className="home-container7">
                <div className="home-testimonial-card">
                  <div className="home-testimonial1">
                    <svg viewBox="0 0 1024 1024" className="home-icon">
                      <path d="M321.008 1024c-68.246-142.008-31.902-223.378 20.55-300.044 57.44-83.956 72.244-167.066 72.244-167.066s45.154 58.7 27.092 150.508c79.772-88.8 94.824-230.28 82.782-284.464 180.314 126.012 257.376 398.856 153.522 601.066 552.372-312.532 137.398-780.172 65.154-832.85 24.082 52.676 28.648 141.85-20 185.126-82.352-312.276-285.972-376.276-285.972-376.276 24.082 161.044-87.296 337.144-194.696 468.73-3.774-64.216-7.782-108.528-41.55-169.98-7.58 116.656-96.732 211.748-120.874 328.628-32.702 158.286 24.496 274.18 241.748 396.622z"></path>
                    </svg>
                    <span className="home-text088">
                      Higher temperatures and prolonged droughts create
                      favorable conditions for wildfires. Colorado has witnessed
                      an increase in the frequency and intensity of wildfires,
                      posing a threat to ecosystems, communities, and air
                      quality.
                    </span>
                  </div>
                </div>
              </div>
              <div className="home-testimonial-card1">
                <div className="home-testimonial2">
                  <svg viewBox="0 0 1024 1024" className="home-icon2">
                    <path d="M439.424 225.92c8.32-8.363 19.157-12.544 30.123-12.587s21.845 4.096 30.208 12.416 12.544 19.157 12.587 30.123-4.096 21.845-12.416 30.208c-8.192 8.277-18.859 12.459-29.739 12.587h-384.853c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h385.835c32.341-0.384 64.683-12.971 89.301-37.76 24.917-25.045 37.333-57.941 37.205-90.624s-12.715-65.493-37.76-90.411-57.899-37.291-90.581-37.205-65.493 12.715-90.411 37.76c-16.64 16.725-16.555 43.733 0.171 60.331s43.733 16.512 60.331-0.171zM506.923 858.24c24.917 25.045 57.685 37.675 90.411 37.76s65.579-12.331 90.624-37.205 37.675-57.685 37.76-90.411-12.331-65.579-37.205-90.624c-24.619-24.789-56.96-37.376-89.301-37.76h-513.877c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h512.853c10.88 0.128 21.547 4.309 29.781 12.587 8.32 8.363 12.459 19.243 12.416 30.208s-4.224 21.803-12.587 30.123-19.243 12.459-30.208 12.416-21.803-4.224-30.123-12.587c-16.597-16.725-43.648-16.811-60.331-0.171s-16.811 43.648-0.171 60.331zM786.603 360.021c12.544-12.501 28.843-18.688 45.269-18.688s32.725 6.272 45.227 18.816 18.688 28.843 18.688 45.269-6.272 32.725-18.816 45.227c-12.459 12.459-28.715 18.645-45.099 18.688l-746.539-0c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h746.752c38.016-0.085 76.117-14.592 105.216-43.605 29.184-29.099 43.819-67.371 43.861-105.557s-14.507-76.459-43.605-105.643-67.413-43.819-105.557-43.861-76.459 14.507-105.643 43.605c-16.683 16.64-16.725 43.648-0.085 60.331s43.648 16.725 60.331 0.085z"></path>
                  </svg>
                  <span className="home-text089">
                    Climate change can exacerbate air quality issues, especially
                    in urban areas. Higher temperatures and changes in
                    precipitation patterns may contribute to the formation of
                    ground-level ozone and particulate matter, impacting
                    respiratory health and overall air quality.
                  </span>
                </div>
              </div>
            </div>
            <div className="home-container8">
              <div className="home-testimonial-card2">
                <svg viewBox="0 0 1024 1024" className="home-icon4">
                  <path d="M864.626 473.162c-65.754-183.44-205.11-348.15-352.626-473.162-147.516 125.012-286.87 289.722-352.626 473.162-40.664 113.436-44.682 236.562 12.584 345.4 65.846 125.14 198.632 205.438 340.042 205.438s274.196-80.298 340.040-205.44c57.27-108.838 53.25-231.962 12.586-345.398zM738.764 758.956c-43.802 83.252-132.812 137.044-226.764 137.044-55.12 0-108.524-18.536-152.112-50.652 13.242 1.724 26.632 2.652 40.112 2.652 117.426 0 228.668-67.214 283.402-171.242 44.878-85.292 40.978-173.848 23.882-244.338 14.558 28.15 26.906 56.198 36.848 83.932 22.606 63.062 40.024 156.34-5.368 242.604z"></path>
                </svg>
                <span className="home-text090">
                  Changes in precipitation patterns and warmer temperatures can
                  affect snowpack and water availability. Colorado relies
                  heavily on snowmelt for its water supply, and alterations in
                  this cycle can lead to water scarcity problems
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-gallery">
        <div className="home-gallery-card">
          <img
            alt="image"
            src="/cameron%20peak%20fire-1500h.jpg"
            loading="lazy"
            className="home-image2"
          />
          <h2 className="home-text091">
            <span>Cameron Peak</span>
            <br></br>
          </h2>
          <span className="home-text094">208,913 Acres Burned, 2020</span>
        </div>
        <div className="home-gallery-card1">
          <img
            alt="image"
            src="/east%20troublesome%20fire-1400w.jpg"
            className="home-image3"
          />
          <h2 className="home-text095">East Troublesome</h2>
          <span className="home-text096">193,812 Acres, 2020</span>
        </div>
        <div className="home-gallery-card2">
          <img
            alt="image"
            src="/pine%20gulch%20fire-1500h.webp"
            className="home-image4"
          />
          <h2 className="home-text097">Pine Gulch</h2>
          <span className="home-text098">139,007 Acres, 2020</span>
        </div>
        <div className="home-gallery-card3">
          <img
            alt="image"
            src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2021-12/colorodo-fires-main-jc-211231-33510b.jpg"
            className="home-image5"
          />
          <h2 className="home-text099">Marshall Fire</h2>
          <span className="home-text100">1,084 Homes Lost, 2021</span>
        </div>
        <div className="home-gallery-card4">
          <img
            alt="image"
            src="https://betweenyouandmecounseling.com/wp-content/uploads/2012/04/waldo-canyon-wildfire-2.jpeg"
            className="home-image6"
          />
          <h2 className="home-text101">Waldo Canyon</h2>
          <span className="home-text102">
            <span>346 Homes Lost, 2012</span>
            <br></br>
          </span>
        </div>
        <div className="home-gallery-card5">
          <img
            alt="image"
            src="https://www.denverpost.com/wp-content/uploads/2016/04/20130611_100618_Black-Forest-Fire-engulfs-house-2.jpg?w=600"
            className="home-image7"
          />
          <h2 className="home-text105">Black Forest</h2>
          <span className="home-text106">
            <span>489 Homes Lost, 2013</span>
            <br></br>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Home
