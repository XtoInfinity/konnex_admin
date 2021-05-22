import styled from 'styled-components';
import color from '../../config/color';

export const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: scroll;
    padding: 20px 20px;
    background-color:whitesmoke;

`;

export const HeadWrapper = styled.div `
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 5px 0px 20px;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    width: 100%;
    border-radius: 10px;
    box-shadow:0 1px 10px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1);
    transition:all 0.3s cubic-bezier(.2,.8,.1,1) ;
    padding: 20px;
    margin-bottom: 20px;
    background-color: white;
`;

export const ScreenName = styled.div `
    font-size: 1.3rem;
    font-weight: 600;
`;

export const Head = styled.div `
    font-size: 2rem;
    font-weight: 600;
    margin: 10px 0 20px;
    color: ${color.primary};
`;

export const SubHead = styled.div `
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 10px;
`;


export const ItemName = styled.div `
    font-size: 1rem;
    font-weight: 500;
`;

export const InstructionSubWrapper = styled.div `
    display: flex;
    flex-direction: column;
    margin-right: 50px;
`;

export const InstructionWrapper = styled.div `
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow: auto;
`;