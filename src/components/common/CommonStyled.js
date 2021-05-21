import styled from 'styled-components';
import color from '../../config/color';

export const Button = styled.button`
    background-color: ${color.primary};
    color: white;
    border: none;
    font-size:1rem;
    font-weight: 500;
    padding: 12px 16px;
    border-radius: 5px;
    transition: background-color 0.2s, transform 0.2s;

    &:hover{
        background-color: ${color.primaryDark};
        transform: scale(1.02);
        cursor: pointer;
    }
`;

export const LineHead = styled.h1`
    color: ${color.primary};
    letter-spacing: 0.1rem;
    margin:0px;
`;