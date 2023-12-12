import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <span className="navigation-links-text">{props.link1}</span>
      <span className="navigation-links-text1">{props.link2}</span>
      <span className="navigation-links-text2">{props.link3}</span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  link1: 'Statistics',
  rootClassName: '',
  link2: 'Features',
  link3: 'Pricing',
}

NavigationLinks.propTypes = {
  link1: PropTypes.string,
  rootClassName: PropTypes.string,
  link2: PropTypes.string,
  link3: PropTypes.string,
}

export default NavigationLinks
