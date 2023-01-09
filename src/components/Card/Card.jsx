import React from 'react'
import { CardContent } from './Card.style'


const Card = ({image, name, status, species}) => {

      const tamanho = name.length
      let classe = ''

      if (tamanho >= 16) {
        classe = 'grande'
      } else {
        classe = 'nome'
      }
      console.log(tamanho)

    return (
    <CardContent>

            <img src={image} alt={image} />
            <ul> 
              <li className={classe}>{name}</li>
              <li>{status}</li>
              <li>{species}</li>
            </ul>
    </CardContent>
    )
  }

export default Card
