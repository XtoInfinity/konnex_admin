import styled from 'styled-components';
import color from '../../config/color';

export const Wrapper = styled.div`
    height: 100vh;    
    overflow: auto;
`;

export const SubWrapper = styled.div`
    height: calc(100vh - 95px);    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:start;
    background-color: white;
    z-index: -1;
`;