import React from 'react'
import { Banner } from './Header.style'
import logo from '../../assets/logo.png'
import bg from '../../assets/bg.png'
import portal from '../../assets/portal.png'
import rickandmorty from '../../assets/rickandmorty.png'

const Header = () => {
  return (
    <Banner>
      <div className="menu">
        <img src={logo} alt="" />
      </div>
      <div className="bg">
        <img src={bg} alt="" className='fundo' />
            <img src={portal} alt="" className='portal' />
              <img src={rickandmorty} alt="" className='rickandmorty'/>
      </div>
    </Banner>
  )
}

export default Header
