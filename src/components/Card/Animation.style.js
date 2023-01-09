import { keyframes } from 'styled-components'


const Aumentar = keyframes`

 From {
    transform: scale(1) translateY(0);
    transform-origin: 50%;
  }
  to {
    transform: scale(1.03) translateY(0px);
    transform-origin: center;
  }

`

export default Aumentar;