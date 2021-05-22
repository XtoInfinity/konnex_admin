import styled from 'styled-components';
import color from '../../config/color';

export const Wrapper = styled.div`
    display: flex;
    align-items: stretch;
    flex-direction: column;
    background-color:${color.greyHover};
    padding: 30px;
    width: 100%;
    overflow: scroll;
    height: 100%;
`;

export const MultiChartWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

export const DNChartWrapper = styled.div`
    width: 400px;
`;

export const LineChartWrapper = styled.div`
    width: 600px;
`;

export const PollValue = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 5px;
`;
