import styled from 'styled-components';
import color from '../../config/color';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height:100%;
    width: 100%;
    background-color:${color.greyHover};
    overflow: scroll;
`;

export const ArticleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0px 0px 7px 1px rgba(0,0,0,0.2);
    padding: 20px 40px;
    margin: 0 40px 20px 40px;
    width: 90%;
`;

export const Edit = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Delete = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Button = styled.button`
    background-color: ${color.primary};
    color: white;
    border: none;
    font-size:1rem;
    font-weight: 500;
    padding: 9px 12px;
    border-radius: 5px;
    transition: background-color 0.2s, transform 0.2s;

    &:hover{
        background-color: ${color.primaryDark};
        transform: scale(1.02);
        cursor: pointer;
    }
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0px 0px 7px 1px rgba(0,0,0,0.2);
    padding: 20px 40px;
    margin: 20px 40px 20px 40px;
    width: 90%;
`;

export const SubArticleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 40px;
    width: 100%;
`;

export const Img = styled.img`
    background-color: ${color.pink};
    height: 300px;
    width: 300px;
    text-align: center;
    object-fit: cover;

`;

export const Head = styled.div`
    color: black;
    font-size: 1.5rem;
    margin-top: 20px;
    margin-bottom: 20px;
   font-weight: 500;
   letter-spacing: 1px;
`;

export const SubHead = styled.div`
    color: ${color.grey};
    margin-top: 4px;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 1px;
`;

export const Description = styled.div`
    color: ${color.grey};
    margin-top: 4px;
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 1.5rem;
    text-align: justify;
    margin-bottom: 20px;
`;
export const SubWrapper = styled.div`   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:start;
`;

export const Row = styled.div`   
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-between;
`;
export const InputRow = styled.div`   
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-between;
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

export const DescriptionField = styled.textarea`
    width: 590px;
    border-radius: 5px;
    border: 1px solid ${color.grey};
    padding: 10px 20px;
    font-size: 1rem;
    color: ${color.greyShade5};
    font-weight: 400;
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