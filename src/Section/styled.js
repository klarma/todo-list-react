import styled from "styled-components";

export const Wrapper = styled.section`
    margin-top: 10px;
    box-shadow: 0 0 3px ${({ theme }) => theme.color.gallery};
`;

export const Header = styled.h2`
    display: flex;
    justify-content: space-between;
    padding: 15px;
    margin: 2px 5px;
    background-color: ${({ theme }) => theme.color.white};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        flex-direction: column;
    }
`;