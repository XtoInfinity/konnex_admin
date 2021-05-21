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

export const CategoryWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    width: 30%;
    padding: 2px 0
`;

export const MetaDataWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: space-evenly;
    justify-content: space-between;
    width: 100%;
    margin: 2px;
`;

export const LabelWrapper = styled.div`
    display: flex;
    width: 27%;
    padding: 2px 0;
`;

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10%;
    margin-right: 10px;
    margin-left: 22px;
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