import styled from 'styled-components';
import color from '../../config/color';

export const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 100%;
    overflow: scroll;
    padding: 20px 20px;
    background-color:whitesmoke;

`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
`;

export const Card = styled.div`
    background-color:white;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    border-radius: 10px;
    box-shadow:0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1);
    transition:all 0.3s cubic-bezier(.2,.8,.1,1) ;
    padding: 20px;
    &:hover{
        box-shadow:  0 7px 10px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.1);
    }
`;

export const AddCard = styled.div`
    background-color:white;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    box-shadow:0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1);
    transition:all 0.3s cubic-bezier(.2,.8,.1,1) ;
    padding: 20px;
    &:hover{
        box-shadow:  0 7px 10px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.1);
    }
`;

export const Text = styled.div`
    font-size: 1rem;
    margin-bottom: 5px;

`;

export const SubText = styled.div`
    font-size: 1rem;
    margin-bottom: 5px;
    text-align: center;

`;
export const Head = styled.div`
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 10px;
    line-height: 2.2rem;

`;