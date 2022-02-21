import styled from 'styled-components';

export const NewProviderModalContainer = styled.form`
    display: flex;
    flex-direction: column;

    width: 100%;

    h1 {
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
    }

    label {
        font-size: 0.9rem;
        color: var(--blue);
    }

    input {
        margin-bottom: 1rem;
    }
`;