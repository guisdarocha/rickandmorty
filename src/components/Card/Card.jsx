import React from 'react'
import { CardContent } from './Card.style'


const Card = ({image, name, status, species}) => {
    return (
      <CardContent>
       <img src={image} alt={image} />
       <ul>
        <li className='nome'>{name}</li>
        <li>{status}</li>
        <li>{species}</li>
       </ul>
      </CardContent>
    )
  }

export default Card