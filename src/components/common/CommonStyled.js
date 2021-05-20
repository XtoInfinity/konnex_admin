import styled from 'styled-components';
import color from '../../config/color';

export const Button = styled.button`
    background-color: ${color.primary};
    color: white;
    border: none;
    font-size:1rem;
    font-weight: 600;
    padding: 6px 16px;
    border-radius: 5px;
    transition: background-color 0.2s, transform 0.2s;

    &:hover{
        background-color: ${color.primary};

        cursor: pointer;
    }
`;
