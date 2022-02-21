import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    margin: 2rem auto 0 auto;
    max-width: var(--app-max-width);

    padding: 0 0.5rem;
`;

export const TableContainer = styled.div`
    overflow: auto;
`;

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const PagesContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.5rem;

    width: 100%;

    button {
        outline: none;
        background: transparent;
        border: none;
    }
`;