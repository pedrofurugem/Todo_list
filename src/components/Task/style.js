import styled from 'styled-components'

export const TaskBox = styled.div`
    display: flex;
    width: 410px;
    padding: 15px;
    align-items: center;
    gap: 15px;

    border-radius: 22.5px;
    background: rgba(53, 56, 62, 0.05);

    svg {
        display: flex;
        width: 35px;
        height: 35px;
        padding: 10px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        border-radius: 11.25px;
        background: rgba(53, 56, 62, 0.10);
        cursor: pointer;
    }
`

export const TaskText = styled.p`
    color: #35383E;
    font-size: 20px;
    font-weight: 700;
`