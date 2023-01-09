import styled from 'styled-components'
import Aumentar from './Animation.style.js'

export const CardContent = styled.div`
    max-width: 293px;
    padding: 0 37px;
    height: 500px;
    background: #57A347;
    text-align: center;
    border-radius: 34px;
    background: linear-gradient(145deg, #5dae4c, #4e9340);
    box-shadow:  5px 5px 25px #12112b,
             -5px -5px 25px #4643ab;
    
    :hover {
    color: #74d95f;
    box-shadow: 5px 5px 20px #74d95f inset;
	animation: ${Aumentar} 3s ease-out both;
    }
    
    img{
    margin: 45px 0 15px 0;
    border-radius: 34px;
     }

    ul{
        margin: 0;
        padding: 0;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        color: #FFFFFF;
     }

    .nome{
        font-weight: 700;
        font-size: 30px;
        margin-bottom: 15px;
    }

    .grande{
      font-weight: 700;
        font-size: 20px;
        margin-bottom: 15px;
    }

    li{
    margin: 7px;
    list-style-type: none;
    }


`
