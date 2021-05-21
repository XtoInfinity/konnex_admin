import styled from 'styled-components';
import color from '../../config/color';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color:${color.greyHover};
    width: 100%;
    height:100%;
    overflow: scroll;

`;

export const ArticleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0px 0px 7px 1px rgba(0,0,0,0.5);
    padding: 20px 40px;
    margin: 0 40px 20px 40px;
    width: 100%;

`;

export const Head = styled.div`
    color: black;
    font-size: 1.5rem;
    margin-top: 20px;
   margin-left: 20px;
   font-weight: 500;
   letter-spacing: 1px;
`;

export const SubWrapper = styled.div`   
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:start;
    background-color: white;
    width: 100%;

`;

export const InputField = styled.input`
    width: 320px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid ${color.grey};
    padding: 0 20px;
    font-size: 0.9rem;
    color: ${color.greyShade5};
    font-weight: 600;
    margin: 0 20px;
    margin-bottom: ${props => props.bottomMargin ?? '0'};
    transition: background-color 0.5s;

    ::placeholder{
        color: ${color.grey};
    }

    &:focus{
        background-color: white;
        outline: none;
        border: 1px solid ${color.primary};

    }
`;