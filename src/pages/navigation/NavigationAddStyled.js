import styled from 'styled-components';
import color from '../../config/color';

export const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: scroll;
    padding: 20px 20px;
    background-color:whitesmoke;

`;

export const HeadWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    border-radius: 10px;
    padding-top: 20px;
    margin-bottom: 20px;
`;
export const HeadCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 10px;
    box-shadow:0 1px 10px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1);
    transition:all 0.3s cubic-bezier(.2,.8,.1,1) ;
    padding: 20px;
    margin-bottom: 20px;
    background-color: white;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    width: 100%;
    border-radius: 10px;
    box-shadow:0 1px 10px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1);
    transition:all 0.3s cubic-bezier(.2,.8,.1,1) ;
    padding: 20px;
    margin-bottom: 20px;
    background-color: white;
`;

export const Head = styled.div `
    font-size: 2rem;
    font-weight: 600;
    margin-right: 40px;
    color: ${color.primary};
`;

export const SubHead = styled.div `
    font-size: 1.5rem;
    font-weight: 600;
    margin: 20px 0 20px;
`;
export const SubText = styled.div`
    font-size: 1rem;
    margin-bottom: 5px;
    text-align: center;

`;

export const InputField = styled.input`
    width: 320px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid grey;
    padding: 0 15px;
    font-size: 0.9rem;
    color: ${color.greyShade5};
    font-weight: 600;
    margin: 0 0;
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

export const Title = styled.div `
    font-size: 2rem;
    font-weight: 600;
    color: ${color.primary};
`;

export const TitleField = styled.input`
    width: 420px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid grey;
    padding: 0 15px;
    font-size: 1.5rem;
    color: ${color.greyShade5};
    font-weight: 600;
    margin: 0 0;
    transition: background-color 0.5s;
    margin-left: 40px;
    ::placeholder{
        color: ${color.grey};
    }

    &:focus{
        background-color: white;
        outline: none;
        border: 1px solid ${color.primary};

    }
`;

export const InstructionSubWrapper = styled.div `
    display: flex;
    flex-direction: column;
    margin-right: 50px;
`;

export const InstructionWrapper = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    overflow: auto;
    padding: 0 0 20px 0; 
`;