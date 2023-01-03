import React from 'react'
import { CardContent } from './Card.style'
import foto from '../../assets/357 1.png'


const Card = () => {
    return (
      <CardContent>
       <img src={foto} alt="" />
       <ul>
        <li className='nome'>Tommy's Clone</li>
        <li>Alive</li>
        <li>Human</li>
       </ul>
      </CardContent>
    )
  }

export default Card