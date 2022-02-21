import { Button } from "components/Button";
import { HeaderContainer, HeaderContent } from "./styles";

import AddIcon from '@material-ui/icons/Add';
import { NewProviderModal } from "components/NewProviderModal";
import { useProvider } from "hooks/useProvider";

export function Header() {
    const { setIsNewProviderModalOpened, setModalObjective } = useProvider();

    function handleOpenProviderCreationModal() {
        setModalObjective('creation');
        setIsNewProviderModalOpened(true);
    }

    return (
        <HeaderContainer>
            <HeaderContent>
                <h1>Fornecedores</h1>
                <Button 
                    onClick={handleOpenProviderCreationModal}
                    maxWidth="170px"
                >
                    <AddIcon style={{fontSize: '1.2rem'}} />
                    Novo fornecedor
                </Button>
            </HeaderContent>

            <NewProviderModal />
        </HeaderContainer>
    );
}