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
      <div className="home-container01">
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
        <div className="home-container02">
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
          src="https://cdn.sanity.io/images/sqn0ww9a/production/5106fdbdac1f973d6ec7544b5e3ea149e94d93d2-2200x1420.png?w=1920&amp;h=1239&amp;auto=format"
          className="home-image"
        />
      </div>
      <div className="home-hero2">
        <img
          alt="image"
          src="https://cdn.sanity.io/images/sqn0ww9a/production/fb53464364807bd021c623177315ed3693243e10-2400x1300.png?w=1920&amp;h=1040&amp;auto=format"
          className="home-image01"
        />
        <div className="home-container03">
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
      <div className="home-container04">
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
          <div className="home-container05">
            <div className="home-container06">
              <div className="home-container07">
                <div className="home-testimonial-card">
                  <div className="home-testimonial1">
                    <svg viewBox="0 0 1024 1024" className="home-icon">
                      <path d="M321.008 1024c-68.246-142.008-31.902-223.378 20.55-300.044 57.44-83.956 72.244-167.066 72.244-167.066s45.154 58.7 27.092 150.508c79.772-88.8 94.824-230.28 82.782-284.464 180.314 126.012 257.376 398.856 153.522 601.066 552.372-312.532 137.398-780.172 65.154-832.85 24.082 52.676 28.648 141.85-20 185.126-82.352-312.276-285.972-376.276-285.972-376.276 24.082 161.044-87.296 337.144-194.696 468.73-3.774-64.216-7.782-108.528-41.55-169.98-7.58 116.656-96.732 211.748-120.874 328.628-32.702 158.286 24.496 274.18 241.748 396.622z"></path>
                    </svg>
                    <h1 className="home-text088">Wildfires</h1>
                    <span className="home-text089">
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
                  <h1 className="home-text090">
                    <span>Air Quality</span>
                    <br></br>
                  </h1>
                  <span className="home-text093">
                    Climate change can exacerbate air quality issues, especially
                    in urban areas. Higher temperatures and changes in
                    precipitation patterns may contribute to the formation of
                    ground-level ozone and particulate matter, impacting
                    respiratory health and overall air quality.
                  </span>
                </div>
              </div>
            </div>
            <div className="home-container08">
              <div className="home-testimonial-card2">
                <svg viewBox="0 0 1024 1024" className="home-icon4">
                  <path d="M864.626 473.162c-65.754-183.44-205.11-348.15-352.626-473.162-147.516 125.012-286.87 289.722-352.626 473.162-40.664 113.436-44.682 236.562 12.584 345.4 65.846 125.14 198.632 205.438 340.042 205.438s274.196-80.298 340.040-205.44c57.27-108.838 53.25-231.962 12.586-345.398zM738.764 758.956c-43.802 83.252-132.812 137.044-226.764 137.044-55.12 0-108.524-18.536-152.112-50.652 13.242 1.724 26.632 2.652 40.112 2.652 117.426 0 228.668-67.214 283.402-171.242 44.878-85.292 40.978-173.848 23.882-244.338 14.558 28.15 26.906 56.198 36.848 83.932 22.606 63.062 40.024 156.34-5.368 242.604z"></path>
                </svg>
                <h1 className="home-text094">Water Scarcity</h1>
                <span className="home-text095">
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
            className="home-image02"
          />
          <h2 className="home-text096">
            <span>Cameron Peak</span>
            <br></br>
          </h2>
          <span className="home-text099">208,913 Acres Burned, 2020</span>
        </div>
        <div className="home-gallery-card1">
          <img
            alt="image"
            src="/east%20troublesome%20fire-1400w.jpg"
            className="home-image03"
          />
          <h2 className="home-text100">East Troublesome</h2>
          <span className="home-text101">193,812 Acres, 2020</span>
        </div>
        <div className="home-gallery-card2">
          <img
            alt="image"
            src="/pine%20gulch%20fire-1500h.webp"
            className="home-image04"
          />
          <h2 className="home-text102">Pine Gulch</h2>
          <span className="home-text103">139,007 Acres, 2020</span>
        </div>
        <div className="home-gallery-card3">
          <img
            alt="image"
            src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2021-12/colorodo-fires-main-jc-211231-33510b.jpg"
            className="home-image05"
          />
          <h2 className="home-text104">Marshall Fire</h2>
          <span className="home-text105">1,084 Homes Lost, 2021</span>
        </div>
        <div className="home-gallery-card4">
          <img
            alt="image"
            src="https://betweenyouandmecounseling.com/wp-content/uploads/2012/04/waldo-canyon-wildfire-2.jpeg"
            className="home-image06"
          />
          <h2 className="home-text106">Waldo Canyon</h2>
          <span className="home-text107">
            <span>346 Homes Lost, 2012</span>
            <br></br>
          </span>
        </div>
        <div className="home-gallery-card5">
          <img
            alt="image"
            src="https://www.denverpost.com/wp-content/uploads/2016/04/20130611_100618_Black-Forest-Fire-engulfs-house-2.jpg?w=600"
            className="home-image07"
          />
          <h2 className="home-text110">Black Forest</h2>
          <span className="home-text111">
            <span>489 Homes Lost, 2013</span>
            <br></br>
          </span>
        </div>
      </div>
      <div className="home-blog">
        <h1 id="solutions" className="home-text114">
          <span>Solutions to these Challenges</span>
          <br></br>
        </h1>
        <div className="home-container09">
          <div className="home-blog-post-card">
            <img
              alt="image"
              src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/c/o/CO_UpperCORiver_JHOUSTON_20210520_00991.jpg?crop=0%2C37%2C1774%2C1106&amp;wid=1250&amp;hei=780&amp;scl=1.4192"
              image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
              className="home-image08"
            />
            <div className="home-container10">
              <h1 className="home-text117">Water Scarcity</h1>
              <span className="home-text118">
                &quot;These strategies include reducing water use, modernizing
                infrastructure, improving forest health, utilizing natural
                landscapes to minimize flood damage and purify and store water,
                and improving stream and river health.&quot;
              </span>
              <div className="home-container11">
                <div className="home-profile">
                  <img
                    alt="profile"
                    src="data:image/png;base64,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"
                    className="home-image09"
                  />
                  <span className="home-text119">
                    <span>The Nature Conservancy</span>
                    <br></br>
                  </span>
                </div>
                <a
                  href="https://www.nature.org/en-us/about-us/where-we-work/united-states/colorado/stories-in-colorado/colorado-charting-a-future-for-colorado-river/#:~:text=These%20strategies%20include%20reducing%20water,improving%20stream%20and%20river%20health."
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link"
                >
                  Read More -&gt;
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="home-container12">
          <div className="home-blog-post-card1">
            <img
              alt="image"
              src="https://cdphe.colorado.gov/sites/cdphe/files/styles/tablet_x2_1024px/public/2020-11/climate%20change.png"
              image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
              className="home-image10"
            />
            <div className="home-container13">
              <h1 className="home-text122">Air Quality</h1>
              <span className="home-text123">
                To enhance air quality in Colorado, measures include enforcing
                strict emission standards, promoting electric vehicles and
                public transportation, and increasing green spaces.
              </span>
              <div className="home-container14">
                <div className="home-profile1">
                  <img
                    alt="profile"
                    src="/colorado-logo-new-720x7201-200h.jpg"
                    className="home-image11"
                  />
                  <span className="home-text124">
                    Colorado Department of Public Health and Environment (CDPHE)
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <a
                  href="https://cdphe.colorado.gov/apcd"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link1"
                >
                  Read More -&gt;
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="home-blog-post-card2">
          <img
            alt="image"
            src="https://dfpc.colorado.gov/sites/dfpc/files/styles/extra_large_thumbnail_650x650_/public/images/3.png"
            image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
            className="home-image12"
          />
          <div className="home-container15">
            <h1 className="home-text125">Wildfires</h1>
            <span className="home-text126">
              <span>
                To prevent wildfires in Colorado, prioritize proactive forest
                management, community preparedness, and early detection
                technologies. Implement climate-resilient land-use planning and
                foster collaboration between agencies.
              </span>
              <br></br>
            </span>
            <div className="home-container16">
              <div className="home-profile2">
                <img
                  alt="profile"
                  src="https://fireadaptedco.org/wp-content/uploads/2022/11/co-fire.png"
                  className="home-image13"
                />
                <span className="home-text129">
                  Colorado Division of Fire Prevention and Control (DFPC)
                </span>
              </div>
              <a
                href="https://dfpc.colorado.gov/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link2"
              >
                Read More -&gt;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
