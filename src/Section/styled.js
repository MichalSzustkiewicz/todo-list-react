import styled from "styled-components";

export const Wrapper = styled.section`
    background-color: white;
    margin: 10px 0;
    box-shadow: 0 0 5px #ccc;
`;

export const Header = styled.header`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #ddd;

    @media(max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h2`
    margin: 0;
    font-size: 20px;
`;

export const Body = styled.div`
    padding: 20px;
`;