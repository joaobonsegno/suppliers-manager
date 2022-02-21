import { useHistory } from 'react-router-dom';
import { useProvider } from 'hooks/useProvider';
import { phoneMask } from 'utils/masks';
import { ProvidersTableContainer } from './styles';


export function ProvidersTable() {
    const history = useHistory();
    const { providers } = useProvider(); 

    return (
        <ProvidersTableContainer>
            <thead>
                <tr className="header-row">
                    <th>Nome</th>
                    <th>Segmento</th>
                    <th>Telefone</th>
                    <th>E-mail</th>
                </tr>
            </thead>

            <tbody>
                {providers.map(provider => (
                    <tr key={provider._id} onClick={() => history.push(`/${provider._id}`)}>
                        <td>
                            {provider.name}
                        </td>
                        <td>
                            {provider.segment}
                        </td>
                        <td>
                            {phoneMask(provider.phone)}
                        </td>
                        <td>
                            {provider.email}
                        </td>
                    </tr>
                ))}
            </tbody>
        </ProvidersTableContainer>
    );
}