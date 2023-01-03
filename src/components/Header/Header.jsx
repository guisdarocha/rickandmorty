import React from 'react'
import { Banner } from './Header.style'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <Banner>
      <div className="menu">
        <img src={logo} alt="" />
      </div>
    </Banner>
  )
}

export default Header
