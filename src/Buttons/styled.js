import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        flex-direction: column;
        padding: 30px;
    }
`;

export const Button = styled.button`
    color: ${({ theme }) => theme.color.teal};
    font-size: 18px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: color .5s linear;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        padding: 10px;
    }

    &:hover{
        filter: brightness(110%);
    }

    &:active{
        filter: brightness(130%);
    }

    &:disabled{
        color: ${({ theme }) => theme.color.silver};
        pointer-events: none; 
    }
`;