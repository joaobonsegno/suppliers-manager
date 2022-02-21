import styled from 'styled-components';

export const ConfirmationModalContainer = styled.main`
    display: flex;
    flex-direction: column;

    width: 100%;

    h1 {
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
    }

    p {
        font-size: 0.8rem;
        color: var(--gray-600);
        font-weight: 400;
    }
`;

export const ActionsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    margin-top: 2rem;
`;