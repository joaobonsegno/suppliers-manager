import styled from 'styled-components';

export const ModalBackground = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 0;
    left: 0;

    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100vh;

    z-index: 200;
`;

export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;

    background: var(--white);
    border-radius: 0.25rem;
    box-shadow: var(--shadow-500);
    
    padding: 2rem;
    width: 40%;
    max-width: 1180px;

    @media (max-width: 1080px) {
        width: 90%;
    }
`;