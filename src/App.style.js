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
    border-radius: 6px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;

    color: #FFFFFF;
    padding: 12px 39px 14px 39px;
    cursor: pointer;
    margin-bottom: 24px;
`