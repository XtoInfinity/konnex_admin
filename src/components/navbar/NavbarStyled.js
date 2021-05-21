import styled from 'styled-components';
import color from '../../config/color';

export const Wrapper = styled.div`
    min-width: 300px;
    background-color: #F9F9F9;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 2px 0px 16px 0 rgba(0, 0, 0, 0.2); 
    overflow-y: auto;
    background-color: white;

    ::-webkit-scrollbar-track
    {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0);
        background-color: transparent;
    }
    ::-webkit-scrollbar
    {
        width: 4px;
        background-color: transparent;
    }
    ::-webkit-scrollbar-thumb
    {
        background-color: ${color.primary};
    }

`;



export const Head = styled.div`
    padding: 20px 2.5vw;
    background-color: ${color.primary};
    color: white;
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: 0.05rem;
`;

export const SubHead = styled.div`
    padding: 13px 2.5vw;
    color: ${color.greyShade2};
    font-size: 1.1rem;
    font-weight: 700;
    &:hover{
        cursor: pointer;
        background:rgba(0,0,0,0.1);
    }
`;