import styled from 'styled-components'
import banner from '../../assets/background-1.jpg'

export const Banner = styled.div`
  background-image:    url(${banner});
    background-size:     cover;
    background-repeat:   no-repeat;
    background-position: center center;
  max-width: 100%;
  height: 500px;

  .menu{
    height: 70px;
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(7.5px);
    text-align: center;
  }
`
