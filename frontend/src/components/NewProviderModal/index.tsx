import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { Loading } from 'components/Loading';
import { Modal } from 'components/Modal';
import { useProvider } from 'hooks/useProvider';
import { FormEvent, useEffect, useState } from 'react';
import { cnpjMask, phoneMask } from 'utils/masks';
import { NewProviderModalContainer } from './styles';


export function NewProviderModal() {
    const { isNewProviderModalOpened, setIsNewProviderModalOpened, createNewProvider, updateProvider, loading, selectedProvider, modalObjective } = useProvider();
    const [name, setName] = useState('');
    const [socialReason, setSocialReason] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [segment, setSegment] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (modalObjective === 'edit' && selectedProvider !== undefined) {
            setName(selectedProvider.name);
            setSocialReason(selectedProvider.socialReason);
            setCnpj(cnpjMask(selectedProvider.cnpj));
            setSegment(selectedProvider.segment);
            setAddress(selectedProvider.address);
            setPhone(phoneMask(selectedProvider.phone));
            setEmail(selectedProvider.email);
        } else {
            clearFields();
        }
    }, [isNewProviderModalOpened, modalObjective, selectedProvider]);

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        let success = false;

        if (modalObjective === 'edit' && selectedProvider) {
            success = await updateProvider({
                _id: selectedProvider._id,
                name,
                socialReason,
                cnpj,
                segment,
                address,
                phone,
                email
            });
        } else {
            success = await createNewProvider({
                name,
                socialReason,
                cnpj,
                segment,
                address,
                phone,
                email
            });
        }

        if (success) {
            setIsNewProviderModalOpened(false);
            clearFields();
        }
    }

    function clearFields() {
        setName('');
        setSocialReason('');
        setCnpj('');
        setSegment('');
        setAddress('');
        setPhone('');
        setEmail('');
    }

    return (
        <Modal
            isOpened={isNewProviderModalOpened}
            onRequestClose={() => setIsNewProviderModalOpened(false)}
        >
            <NewProviderModalContainer onSubmit={handleSubmit}>
                {modalObjective === 'creation' ? (
                    <h1>Novo fornecedor</h1>
                ) : (
                    <h1>Atualizar fornecedor</h1>
                )}
                {loading && (
                    <Loading type="linear" />
                )}

                <label>Nome:</label>
                <Input 
                    value={name}
                    onChange={event => setName(event.target.value)}
                    disabled={loading}
                    type="text"
                    required
                />
                <label>Razão Social:</label>
                <Input 
                    value={socialReason}
                    onChange={event => setSocialReason(event.target.value)}
                    disabled={loading}
                    type="text"
                    required
                />
                <label>CNPJ:</label>
                <Input 
                    value={cnpj}
                    onChange={event => setCnpj(cnpjMask(event.target.value))}
                    disabled={loading}
                    type="text"
                    required
                />
                <label>Segmento:</label>
                <Input 
                    value={segment}
                    onChange={event => setSegment(event.target.value)}
                    disabled={loading}
                    type="text"
                    required
                />
                <label>Endereço:</label>
                <Input 
                    value={address}
                    onChange={event => setAddress(event.target.value)}
                    disabled={loading}
                    type="text"
                    required
                />
                <label>Telefone:</label>
                <Input 
                    value={phone}
                    onChange={event => setPhone(phoneMask(event.target.value))}
                    disabled={loading}
                    type="text"
                    required
                />
                <label>Email:</label>
                <Input 
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    disabled={loading}
                    type="email"
                    required
                />

                <Button 
                    type="submit"
                    maxWidth="230px"
                    style={{alignSelf: 'flex-end'}}
                >
                    {modalObjective === 'creation' ? (
                        'Cadastrar fornecedor'
                    ) : (
                        'Atualizar fornecedor'
                    )}
                </Button>
            </NewProviderModalContainer>
        </Modal>
    );
}