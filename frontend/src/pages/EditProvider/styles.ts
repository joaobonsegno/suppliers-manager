import styled from 'styled-components';

export const Container = styled.div`
    max-width: var(--app-max-width);
    margin: 0 auto;
    margin-top: 1.5rem;

    background: var(--white);
    padding: 1rem;
    box-shadow: var(--shadow-500);

    border-radius: 0.25rem;
    word-wrap: break-word;
`;

export const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    h2 {
        font-size: 1.3rem;
    }
`;

export const ProviderInfo = styled.main`
    display: flex;
    flex-direction: column;
    gap: 0.7rem;

    width: 100%;
    margin-top: 1rem;
    margin-left: 2.2rem;

`;

export const DataWrapper = styled.div`
    display: flex;
    gap: 0.35rem;


    h3 {
        font-weight: 500;
        font-size: 1rem;
    }
`;