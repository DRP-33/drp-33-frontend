import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import MapView from '../views/MapView'
import CreateRequestView from '../views/CreateRequestView';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/map">
                    <MapView />
                </Route>
                <Route path="/create-request">
                    <CreateRequestView />
                </Route>
                <Route path="/">
                    <Login />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;