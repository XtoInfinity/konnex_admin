import styled from 'styled-components';
import color from '../../config/color';

export const Wrapper = styled.div`
    display: flex;
    justify-content: top;
    align-items: center;
    flex-direction: column;
    height:100%;
    background-color:whitesmoke;
    padding: 20px;
    width: 100%;
    overflow: scroll;
`;

export const FeedbackWrapper = styled.div`
    display: flex;
    justify-content: top;
    align-items: stretch;
    flex-direction: column;
    height:100%;
    background-color:${color.greyHover};
    padding: 20px;
    margin: 20px;
    width: 80%;
`;

export const Card = styled.div`
    display: flex;
    width: 80%;
    align-items: stretch;
    justify-content: left;
    height: 100px;
    padding: 10px;
    margin: 10px;
`;

