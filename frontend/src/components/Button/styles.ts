import styled from 'styled-components';

export const ButtonContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    border: none;
    outline: none;
    border-radius: 0.25rem;

    box-shadow: var(--shadow-200);
    background: var(--blue);
    padding: 0.5rem;

    color: var(--white);
    width: 100%;
`;