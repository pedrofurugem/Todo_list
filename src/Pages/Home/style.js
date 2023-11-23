import styled from 'styled-components'

export const MainContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   height: 100vh
`

export const Content = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
`

export const LeftContent = styled.div`

`

export const Title = styled.p`
    color: #000;
    font-size: 40px;
    font-weight: 800;

    span {
        color: #1F5FA3;
    }
`

export const Button = styled.button`
    width: 210px;
    height: 58px;
    flex-shrink: 0;
    color: #FEF6F6;
    border-radius: 30px;
    background: #1F5FA3;
    color: #FEF6F6;
    text-align: center;
    font-size: 24px;
    font-weight: 400;
    margin-top: 12px;
    border: none;
    cursor: pointer;
`