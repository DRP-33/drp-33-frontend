import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import MapView from '../views/MapView'
import CreateRequestView from '../views/CreateRequestView';
import PhonePopup from './PhonePopup';
import SupplyPopup from './SupplyPopUp';
import ManageRequestView from '../views/ManageRequestView';

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
                <Route path="/phonepopup">
                    <PhonePopup />
                </Route>
                <Route path="/supplypopup">
                    <SupplyPopup />
                </Route>
                <Route path="/manage-request">
                    <ManageRequestView />
                </Route>
                <Route path="/">
                    <Login />
                </Route>
                
            </Switch>
        </BrowserRouter>
    )
}

export default Router;