import styled from 'styled-components';

export const ProvidersTableContainer = styled.table`
    width: 100%;
    border-spacing: 0 0.5rem;

    .header-row {
        box-shadow: none;
        cursor: default;

        th {
            font-weight: 500;
            padding: 0.5rem 2rem;
        }

        &:hover {
            filter: none;
        }
    }

    tr {
        border-radius: 0.25rem;
        box-shadow: var(--shadow-200);

        cursor: pointer;
        transition: filter 0.5s;

        th {
            color: var(--gray-500);
            font-weight: 400;
            padding: 1rem 2rem;

            text-align: left;
            line-height: 1.5rem;
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--gray-300);

            color: var(--gray-500);
        }

        &:hover {
            filter: brightness(0.9);
        }
    }
`;