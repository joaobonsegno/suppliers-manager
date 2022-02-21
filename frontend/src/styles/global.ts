import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    html, body, #root {
        background: var(--background);
        min-height: 100vh;
    }

    body, button, input, textarea, select {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.9;
        cursor: not-allowed;
    }

    .hide-overflow {
        overflow: hidden;
    }

    :root {
        --background: #f7f7f7;
        --purple: #583F99;
        --red: #993F3F;
        --green: #45993F;
        --blue: #4B5EAA;
        --orange: #D2691E;
        --yellow: #cd9b0f;
        
        --gray-200: #F1F1F1;
        --gray-300: #E7E7E7;
        --gray-400: #cfcbcb;
        --gray-500: #707070;
        --gray-600: #505050;

        --black: #000000;
        --white: #FFFFFF;

        --shadow-200: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);
        --shadow-500: 1px 1px 4px 2px rgba(0, 0, 0, 0.2);

        --app-max-width: 1280px;
    }
`;

export const Container = styled.div`
    padding-top: 4rem;
`;
