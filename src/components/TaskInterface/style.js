import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 52px
`

export const LeftContainer = styled.div`
    
`

export const BoxContainer = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 22px
`

export const TitleBox = styled.h1`
    color: #000;
    font-size: 40px;
    font-weight: 800;
    

    span {
        color: #1F5FA3;
        font-size: 40px;
        font-weight: 800;
    }
`

export const Description = styled.p` 
    color: #000;
    font-size: 24px;
    font-weight: 400;
    text-align: left;
    width: 584px;
    height: 57px;
    flex-shrink: 0;
`

export const RigthContainer = styled.div`
    display: flex;
    width: 500px;
    height: 474px;
    padding: 45px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    border-radius: 45px;
    background: #FFF;
    box-shadow: 0px 40px 100px 0px rgba(0, 0, 0, 0.08), 0px 10px 80px 0px rgba(0, 0, 0, 0.06), 0px 2px 15px 0px rgba(0, 0, 0, 0.12), 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
`