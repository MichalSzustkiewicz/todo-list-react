import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    color: teal;
    background: transparent;
    border: none;
    margin: 0 0 0 20px;
    transition: color 0.5s linear;

    @media(max-width: 767px) {
        flex-basis: 100%;
        margin: 10px;
    }

    &:hover {
        color: hsl(180, 100%, 35%);
    }

    &:disabled {
        color: #ccc;
    }
`;