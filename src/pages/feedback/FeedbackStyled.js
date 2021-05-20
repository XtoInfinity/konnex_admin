import styled from 'styled-components';
import color from '../../config/color';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: top;
    flex-direction: column;
    height:100vh;
    background-color:${color.greyHover};
    padding: 20px
`;

export const Card = styled.div`
    display: flex;
    width: 80%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    overflow: hidden;
    background-color: white;
    box-shadow: 0px 0px 7px 1px rgba(0,0,0,0.5);
    padding: 20px;
    margin: 20px;
`;

export const UserWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 20%;
    padding: 2px 0;
    margin-bottom: 0px;
`;

export const MetaDataWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 80%;
`;

export const MessageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 80%;
    margin-top: 20px;
`;

export const SentimentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${props => (props.isPositive ? color.green : color.red)};
    width: 20%;
    padding: 2px 0;
    margin-bottom: 0px;
    color: ${color.gray};
`;

export const Head = styled.div`
    color: white;
    font-size: 1.5rem;
   margin-left: 20px;
   font-weight: 500;
   letter-spacing: 1px;
`;


export const Image = styled.img`
    height: 40px;
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
