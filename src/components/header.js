import React from 'react'

import PropTypes from 'prop-types'

import NavigationLinks from './navigation-links'
import './header.css'

const Header = (props) => {
  return (
    <header data-role="Header" className="header-header">
      <img
        alt={props.Image_alt}
        src={props.Image_src}
        className="header-image"
      />
      <div className="header-nav">
        <NavigationLinks rootClassName="rootClassName17"></NavigationLinks>
      </div>
    </header>
  )
}

Header.defaultProps = {
  Image_src: '/colorado-logo-new-720x7201-1500h.jpg',
  Image_alt: 'logo',
}

Header.propTypes = {
  Image_src: PropTypes.string,
  Image_alt: PropTypes.string,
}

export default Header
