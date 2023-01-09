import styled from 'styled-components'

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    column-gap: 20px;
    row-gap: 40px;
    justify-content: space-between;

`


export const BotaoMais = styled.button`
    background: #30883E;
    border: none;
    border-radius: 55px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    box-shadow:  3px 3px 14px #12112b,
    -3px -3px 14px   #4643ab;
    
    color: #FFFFFF;
    padding: 12px 39px 14px 39px;
    cursor: pointer;
    margin-bottom: 24px;
`