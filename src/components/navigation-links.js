import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <a href="#stats" className="navigation-links-link">
        {props.link1}
      </a>
      <a href="#challenges" className="navigation-links-link1">
        {props.link2}
      </a>
      <span className="navigation-links-text">{props.link3}</span>
      <span className="navigation-links-text1">{props.link4}</span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  link1: 'Statistics',
  rootClassName: '',
  link4: 'Sources',
  link2: 'Challenges',
  link3: 'Solutions',
}

NavigationLinks.propTypes = {
  link1: PropTypes.string,
  rootClassName: PropTypes.string,
  link4: PropTypes.string,
  link2: PropTypes.string,
  link3: PropTypes.string,
}

export default NavigationLinks
