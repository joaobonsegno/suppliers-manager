import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { ProvidersList } from './pages/ProvidersList';
import { EditProvider } from './pages/EditProvider';
import { Header } from 'components/Header';

export function Routes() {

    return (
        <BrowserRouter>
            <Header />

            <Switch>
                <Route exact path="/" component={ProvidersList}/>
                <Route path="/:id" component={EditProvider}/>
            </Switch>
        </BrowserRouter>
    );
}