import { ProvidersTable } from './ProvidersTable';
import { Container, PagesContainer, SearchContainer, TableContainer } from './styles';
import { useProvider } from 'hooks/useProvider';
import { Input } from 'components/Input';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SearchIcon from '@material-ui/icons/Search';
import { ChangeEvent } from 'react';


export function ProvidersList() {
    const { page, totalPages, setSearch, setPage } = useProvider();

    function handleSearchInputChange(event: ChangeEvent<HTMLInputElement>) {
        if (event.target.value.length >= 3) {
            setSearch(event.target.value);
        } else {
            setSearch('');
        }
    }

    return (
        <Container>
            <SearchContainer>
                <SearchIcon style={{color: 'var(--gray-500)'}}/>
                <Input 
                    onChange={handleSearchInputChange}
                    placeholder="Pesquisar fornecedor"
                    maxWidth="16rem"
                />
            </SearchContainer>
            <TableContainer>
                <ProvidersTable /> 
            </TableContainer>
            <PagesContainer>
                <button 
                    type="button"
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                >
                    <ChevronLeftIcon />
                </button>
                <span>
                    {page} de {totalPages}
                </span>
                <button 
                    type="button"
                    disabled={page === totalPages}
                    onClick={() => setPage(page + 1)}
                >
                    <ChevronRightIcon />
                </button>
            </PagesContainer>
        </Container>
    );
}