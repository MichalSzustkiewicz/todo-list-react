import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.color.alto};
    border-radius: 2px;
`;

export const Button = styled.button`
    padding: 10px;
    color: ${({ theme }) => theme.color.white};
    background: ${({ theme }) => theme.color.teal};
    border: none;
    border-radius: 2px;
    transition: filter 0.5s, transform 0.5s;

    &:hover {
        filter: brightness(110%);
        transform: scale(1.15);
    }

    &:active {
        filter: brightness(120%);
    }
`;