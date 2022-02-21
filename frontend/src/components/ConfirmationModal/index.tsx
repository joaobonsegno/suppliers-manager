import { Button } from 'components/Button';
import { Modal } from 'components/Modal';
import { ActionsContainer, ConfirmationModalContainer } from './styles';

type ConfirmationModalProps = {
    isOpened: boolean;
    title: string;
    description: string;
    confirmButtonText?: string;
    cancelButtonText?: string;
    onConfirmClick: () => void;
    onCancelClick: () => void;
}

export function ConfirmationModal({
        isOpened, 
        title, 
        description, 
        confirmButtonText='Confirmar', 
        cancelButtonText='Cancelar', 
        onConfirmClick, 
        onCancelClick
    }: ConfirmationModalProps) {

    

    return (
        <Modal
            isOpened={isOpened}
            onRequestClose={onCancelClick}
        >
            <ConfirmationModalContainer>
                <h1>{title}</h1>

                <p>{description}</p>

                <ActionsContainer>
                    <Button 
                        maxWidth="230px"
                        onClick={onCancelClick}
                    >
                        {cancelButtonText}
                    </Button>
                    <Button 
                        maxWidth="230px"
                        onClick={onConfirmClick}
                    >
                        {confirmButtonText}
                    </Button>
                </ActionsContainer>
            </ConfirmationModalContainer>
        </Modal>
    );
}