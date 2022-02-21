import { MouseEvent, ReactNode, useEffect, useRef } from 'react';
import { ModalBackground, ModalContainer } from './styles';

type ModalProps = {
    children: ReactNode;
    isOpened: boolean;
    onRequestClose: () => void;
}

export function Modal({children, isOpened, onRequestClose}: ModalProps) {
    const backgroundRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpened) {
            document.body.classList.add("hide-overflow");
        } else {
            document.body.classList.remove("hide-overflow");
        }
    }, [isOpened]);

    function handleBackgroundClick(event: MouseEvent) {
        if (event.target === backgroundRef.current) {
            onRequestClose();
        }
    }

    return (
        isOpened ? (
            <ModalBackground ref={backgroundRef} onClick={handleBackgroundClick}>
                <ModalContainer>
                    {children}
                </ModalContainer>
            </ModalBackground>
        ) : null
    );
}