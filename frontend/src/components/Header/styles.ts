import styled from 'styled-components';

export const HeaderContainer = styled.header`
    position: fixed;
    z-index: 100;
    top: 0;
    
    width: 100%;
    height: 4rem;

    background: var(--white);
    box-shadow: var(--shadow-200);
`;

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0 auto;

    width: 100%;
    max-width: var(--app-max-width);
    height: 4rem;

    padding: 0 0.5rem;
  
    h1 {
        font-size: 1.2rem;
        color: var(--gray-600);
    }
`;