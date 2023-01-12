import styled from 'styled-components'
import Rotation from './Animation.style.js'

export const Banner = styled.div`

.bg{
 position: relative;
  max-width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fundo{
max-width: 100%;
 height: 400px;
 filter: brightness(0.8);
}


.portal{
  position: absolute;
  max-width: 350px;
  filter: drop-shadow(5px 5px 15px #00f400);
  animation: ${Rotation} 20s linear infinite;
}

.rickandmorty{
  position: absolute;
}
  .menu{
    height: 80px;
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(7.5px);
    text-align: center;
    padding-top: 5px;
  }
`
