import styled, { css } from "styled-components";

export const List = styled.ul`
    padding: 20px;
    margin: 2px 5px;
    background-color: #fff;
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
    color: #333;
    overflow-wrap: anywhere;
    word-break: break-word;

    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    margin-right: 10px;
    color: #eee;
    border: none;
    width: 30px;
    height: 30px;
    font-size: 10px;
    cursor: pointer;
    transition: background-color .5s linear;

    ${({ toggleDone }) => toggleDone && css`   
        background-color: hsl(120, 100%, 25%);

        &:hover {
            background-color: hsl(120, 100%, 35%);
        }

        &:active {
            background-color: hsl(120, 100%, 45%);
        }
    `}
        
    ${({ remove }) => remove && css`
        background-color: hsl(0, 100%, 50%);

        &:hover{
            background-color: hsl(0, 100%, 60%);
        }

        &:active{
            background-color: hsl(0, 100%, 70%);
        }
    `}   
`;