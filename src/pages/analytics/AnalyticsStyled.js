import styled from 'styled-components';
import color from '../../config/color';

export const Wrapper = styled.div`
    display: flex;
    align-items: stretch;
    flex-direction: column;
    background-color:${color.greyHover};
    padding: 20px;
    width: 100%;
    overflow: scroll;
    height: 100%;
`;

export const Card = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0px 0px 7px 1px rgba(0,0,0,0.5);
    padding: 10px;
    margin: 10px;
`;

export const IconWrapper = styled.div`
    align-items: center;
    justify-content: center;
    width: 80px;
`;