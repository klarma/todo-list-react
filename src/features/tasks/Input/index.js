import styled from "styled-components";

const Input = styled.input`
    padding: 8px;
    border: 1px solid ${({ theme }) => theme.color.gallery};
`;

export default Input;