import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;

    @media (max-width: 767px) {
        flex-direction: column;
        padding: 30px;
    }
`;

export const Button = styled.button`
    color: hsl(180, 100%, 25%);
    font-size: 18px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: color .5s linear;

    @media (max-width: 767px) {
        padding: 10px;
    }

    &:hover{
        color: hsl(180, 100%, 35%);
    }

    &:active{
        color: hsl(180, 100%, 45%);
    }

    &:disabled{
        color: #ddd;
        pointer-events: none; 
    }
`;