import { createContext, useContext, useState, useEffect, ReactNode, Dispatch, SetStateAction } from 'react';
import { toast } from 'react-toastify';
import { api } from 'services/api';

const ProvidersContext = createContext({} as ProvidersContextValues);
type ProvidersContextProps = {
    children: ReactNode;
}

type ModalObjective = 'creation' | 'edit';

type ProvidersContextValues = {
    providers: Provider[]; 
    setProviders: Dispatch<SetStateAction<Provider[]>>;
    selectedProvider?: Provider; 
    setSelectedProvider: Dispatch<SetStateAction<Provider | undefined>>;
    page: number; 
    setPage: Dispatch<SetStateAction<number>>;
    totalPages: number; 
    setTotalPages: Dispatch<SetStateAction<number>>;
    search: string; 
    setSearch: Dispatch<SetStateAction<string>>;
    isNewProviderModalOpened: boolean; 
    setIsNewProviderModalOpened: Dispatch<SetStateAction<boolean>>;
    modalObjective: ModalObjective; 
    setModalObjective: Dispatch<SetStateAction<ModalObjective>>;
    fetchSpecificProvider: (id: string) => void;
    deleteProvider: (id: string) => void;
    createNewProvider: (newProvider: CreationProvider) => Promise<boolean>;
    updateProvider: (newProvider: Provider) => Promise<boolean>;
    loading: boolean;
}

type Provider = {
    _id: string;
    name: string;
    socialReason: string;
    cnpj: string;
    segment: string;
    address: string;
    phone: string;
    email: string;
}
type CreationProvider = Omit<Provider, '_id'>;

type FetchProviders = {
    data: {
        docs: Provider[];
        pages: number;
        page: string;
    };
}
type FetchSpecificProvider = {
    data: Provider | undefined;
}

export function ProvidersContextProvider({children}: ProvidersContextProps) {
    const [providers, setProviders] = useState<Provider[]>([]);
    const [selectedProvider, setSelectedProvider] = useState<Provider>();
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [search, setSearch] = useState('');
    const [isNewProviderModalOpened, setIsNewProviderModalOpened] = useState(false);
    const [modalObjective, setModalObjective] = useState<ModalObjective>('creation');

    useEffect(() => {
        fetchProviders();
    }, [page, search]);

    async function fetchProviders() {
        setLoading(true);
        try {
            const response: FetchProviders = await api.get(`/providers?page=${page}&name=${search}`);
            setProviders(response.data.docs);
            setPage(parseInt(response.data.page));
            setTotalPages(response.data.pages);
        } catch(err) {
            console.error(err);
            toast.error('Houve um erro tentar recuperar a lista de fornecedores. Tente novamente.');
        }
        setLoading(false);
    }

    async function fetchSpecificProvider(id: string) {
        setLoading(true);
        try { 
            const response: FetchSpecificProvider = await api.get(`/providers/${id}`);
            setSelectedProvider(response.data);
        } catch(err) {
            console.error(err);
            toast.error('Houve um erro ao procurar o fornecedor. Tente novamente.');
        }
        setLoading(false);
    }

    async function createNewProvider(newProvider: CreationProvider): Promise<boolean> {
        setLoading(true);
        try {
            await api.post(`/providers`, newProvider);
            fetchProviders();
            toast.success('Fornecedor cadastrado com sucesso!');
            setLoading(false);
            return true;
        } catch(err: any) {
            console.error(err.response.data.error);
            showErrorMessage(err);
            setLoading(false);
            return false;
        }
    }

    async function updateProvider(newProvider: Provider): Promise<boolean> {
        setLoading(true);
        try {
            await api.put(`/providers/${newProvider._id}`, newProvider);
            fetchSpecificProvider(newProvider._id);
            fetchProviders();
            toast.success('Fornecedor atualizado com sucesso!');
            setLoading(false);
            return true;
        } catch(err: any) {
            console.error(err.response.data.error);
            showErrorMessage(err);
            setLoading(false);
            return false;
        }
    }

    async function deleteProvider(id: string) {
        setLoading(true);
        try { 
            await api.delete(`/providers/${id}`);
            await fetchProviders();
            toast.success('Fornecedor deletado com sucesso!');
        } catch(err) {
            console.error(err);
            toast.error('Houve um erro ao deletar o fornecedor. Tente novamente.');
        }
        setLoading(false);
    }

    function showErrorMessage(err: any) {
        const errorMessage = err?.response?.data?.error;
        if (!errorMessage) {
            toast.error('Houve um erro ao efetuar o cadastro ou atualização do fornecedor. Tente novamente.');
            return;
        }

        if (errorMessage === 'Required attribute "name" was not informed' ||
            errorMessage === 'Attribute "name" cannot be empty') {
            toast.error('O atributo "Nome" é obrigatório. Por favor, informe-o.');
        } else if (errorMessage === 'Required attribute "socialReason" was not informed' ||
            errorMessage === 'Attribute "socialReason" cannot be empty') {
            toast.error('O atributo "Razão Social" é obrigatório. Por favor, informe-o.');
        } else if (errorMessage === 'Required attribute "cnpj" was not informed') {
            toast.error('O atributo "CNPJ" é obrigatório. Por favor, informe-o.');
        } else if (errorMessage === 'Required attribute "segment" was not informed' ||
            errorMessage === 'Attribute "segment" cannot be empty') {
            toast.error('O atributo "Segmento" é obrigatório. Por favor, informe-o.');
        } else if (errorMessage === 'Required attribute "address" was not informed' ||
            errorMessage === 'Attribute "address" cannot be empty') {
            toast.error('O atributo "Endereço" é obrigatório. Por favor, informe-o.');
        } else if (errorMessage === 'Required attribute "phone" was not informed') {
            toast.error('O atributo "Telefone" é obrigatório. Por favor, informe-o.');
        } else if (errorMessage === 'Required attribute "email" was not informed') {
            toast.error('O atributo "E-mail" é obrigatório. Por favor, informe-o.');
        } else if (errorMessage === 'The informed CNPJ is not valid') {
            toast.error('O CNPJ informado possui formato inválido. Por favor, insira um com o formato correto.');
        } else if (errorMessage === 'The informed phone is not valid') {
            toast.error('O telefone informado possui formato inválido. Por favor, insira um com o formato correto.');
        } else if (errorMessage === 'The informed email is not valid') {
            toast.error('O email informado possui formato inválido. Por favor, insira um com o formato correto.');
        } else if (errorMessage === 'The informed CNPJ is already registered') {
            toast.error('O CNPJ informado já está cadastrado. Por favor, insira um CNPJ diferente.');
        }
    }

    return (
        <ProvidersContext.Provider
            value={{
                providers, setProviders,
                selectedProvider, setSelectedProvider,
                page, setPage,
                totalPages, setTotalPages,
                search, setSearch,
                isNewProviderModalOpened, setIsNewProviderModalOpened,
                modalObjective, setModalObjective,
                fetchSpecificProvider,
                createNewProvider, updateProvider,
                deleteProvider,
                loading
            }}
        >
            {children}
        </ProvidersContext.Provider>
    );
}

export function useProvider() {
    return useContext(ProvidersContext);
}