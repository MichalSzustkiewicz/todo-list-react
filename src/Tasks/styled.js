import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}    
`;

export const Button = styled.button`
    width: 30px;
    height: 30px;
    color: white;
    border: none;
    transition: background 0.5s linear;

    ${({ $toggleDone }) => $toggleDone && css`
        background: hsl(120, 60%, 40%);

        &:hover {
            background: hsl(120, 60%, 45%);
        }

        &:active {
            background: hsl(120, 60%, 50%);
        }
    `}

    ${({ $remove }) => $remove && css`
        background: hsl(348, 83%, 47%);

        &:hover {
            background: hsl(348, 83%, 55%);
        }

        &:active {
            background: hsl(348, 83%, 60%);
        }
    `}
`;