import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 10px;
    padding: 20px;
    margin: 2px 5px;
    background-color: ${({ theme }) => theme.color.white};

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        grid-template-columns: 1fr;
    }
`;

export const Button = styled.button`
    padding: 8px;
    border: none;
    background-color:  ${({ theme }) => theme.color.teal};
    color:  ${({ theme }) => theme.color.gallery};
    cursor: pointer;
    transition: background-color .5s linear, transform .2s linear;

    &:hover{
        filter: brightness(110%);
        transform: scale(1.1);
    }

    &:active {
        filter: brightness(120%);
    }
`;