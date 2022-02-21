import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Container, DataWrapper, ProviderInfo, TitleWrapper } from './styles';
import { InvisibleLink } from 'components/InvisibleLink';
import { useProvider } from 'hooks/useProvider';
import { Loading } from 'components/Loading';
import { Button } from 'components/Button';
import { cnpjMask, phoneMask } from 'utils/masks';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import { ConfirmationModal } from 'components/ConfirmationModal';

type Params = {
    id: string;
}

export function EditProvider() {
    const history = useHistory();
    const { id } = useParams<Params>();
    const { selectedProvider, loading, fetchSpecificProvider, setIsNewProviderModalOpened, setModalObjective, deleteProvider } = useProvider();
    const [isDeletionModalOpened, setIsDeletionModalOpened] = useState(false);

    useEffect(() => {
        fetchSpecificProvider(id);
    }, [id]);

    function handleOpenEditModal() {
        setModalObjective('edit');
        setIsNewProviderModalOpened(true);
    }

    async function handleDeleteProvider() {
        setIsDeletionModalOpened(false);
        await deleteProvider(id);
        history.push('/');
    }

    return (
        <Container>
            {!loading ? (
                <>
                    <TitleWrapper>
                        <InvisibleLink to="/">
                            <ChevronLeftIcon style={{fontSize: '2rem'}}/>
                        </InvisibleLink>
                        <h2>{selectedProvider?.name}</h2>
                        <Button 
                            maxWidth="2.3rem" 
                            onClick={handleOpenEditModal}
                        >
                            <CreateIcon style={{fontSize: '1.2rem'}}/>
                        </Button>
                        <Button 
                            maxWidth="2.3rem" 
                            onClick={() => setIsDeletionModalOpened(true)} 
                            background="var(--red)"
                        >
                            <DeleteIcon style={{fontSize: '1.2rem'}}/>
                        </Button>
                    </TitleWrapper>

                    <ProviderInfo>
                        <DataWrapper>
                            <h3>Razão Social:</h3>
                            <span>{selectedProvider?.socialReason}</span>
                        </DataWrapper>
                        <DataWrapper>
                            <h3>CNPJ:</h3>
                            <span>{cnpjMask(selectedProvider?.cnpj)}</span>
                        </DataWrapper>
                        <DataWrapper>
                            <h3>Segmento:</h3>
                            <span>{selectedProvider?.segment}</span>
                        </DataWrapper>
                        <DataWrapper>
                            <h3>Endereço:</h3>
                            <span>{selectedProvider?.address}</span>
                        </DataWrapper>
                        <DataWrapper>
                            <h3>Telefone:</h3>
                            <span>{phoneMask(selectedProvider?.phone)}</span>
                        </DataWrapper>
                        <DataWrapper>
                            <h3>E-mail:</h3>
                            <span>{selectedProvider?.email}</span>
                        </DataWrapper>

                    </ProviderInfo>
                </>
            ) : (
                <Loading type="linear" label="Carregando informações do fornecedor..." />
            )}
            <ConfirmationModal 
                title="Deseja realmente deletar o fornecedor?"
                description="Esta ação é irreversível. Todos os dados do fornecedor serão permanentemente perdidos."
                confirmButtonText="Sim, deletar"
                cancelButtonText="Não, cancelar"
                isOpened={isDeletionModalOpened}
                onCancelClick={() => setIsDeletionModalOpened(false)}
                onConfirmClick={handleDeleteProvider}
            />
        </Container>
    );
}