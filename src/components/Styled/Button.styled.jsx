import styled from "styled-components";

export const Button = styled.button`
    background-color: ${(props) => props.background};
    border-color: ${(props) => props.border};
    padding: 5px 8px;
    cursor: pointer;
    border-radius: 8px
`;
