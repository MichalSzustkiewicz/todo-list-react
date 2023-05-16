import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media(max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 2px;
`;

export const Button = styled.button`
    padding: 10px;
    color: white;
    background: hsl(180, 100%, 25%);
    border: none;
    border-radius: 2px;
    transition: background 0.5s, transform 0.5s;

    &:hover {
        background: hsl(180, 100%, 30%);
        transform: scale(1.15);
    }

    &:active {
        background: hsl(180, 100%, 35%)
    }
`;