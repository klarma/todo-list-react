import styled, { css } from "styled-components";

export const List = styled.ul`
    padding: 20px;
    margin: 2px 5px;
    background-color: ${({ theme }) => theme.color.white};
    list-style-type: none;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 2px solid #eee;
    margin-bottom: 10px;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    color: ${({ theme }) => theme.color.mineshaft};
    overflow-wrap: anywhere;
    word-break: break-word;

    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    margin-right: 10px;
    color: ${({ theme }) => theme.color.gallery};
    border: none;
    width: 30px;
    height: 30px;
    font-size: 10px;
    cursor: pointer;
    transition: background-color .5s linear;

    ${({ toggleDone }) => toggleDone && css`   
        background-color: ${({ theme }) => theme.color.forestGreen};

        &:hover {
            filter: brightness(110%);
        }

        &:active {
            filter: brightness(130%);
        }
    `}
        
    ${({ remove }) => remove && css`
        background-color: ${({ theme }) => theme.color.crimson};

        &:hover{
            filter: brightness(110%);
        }

        &:active{
            filter: brightness(130%);
        }
    `}   
`;