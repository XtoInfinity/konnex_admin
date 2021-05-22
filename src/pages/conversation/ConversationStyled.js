import styled from 'styled-components';
import color from '../../config/color';

export const Wrapper = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: top;
    flex-direction: column;
    background-color:${color.greyHover};
    padding: 20px;
    width: 100%;
    overflow: scroll;
    height: 100%;
`;

export const AdminConversationCard = styled.div`
    display: flex;
    margin: 10px;
`;

export const MessageBox = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    width: 100%;
`;

export const UserConversationCard = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 10px;
`;
