import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './Login';
//import NewLogin from './NewLogin';
import MapView from '../views/MapView'
import CreateRequestView from '../views/CreateRequestView';
import ChatView from '../views/ChatView';
import PhonePopup from './PhonePopup';
import SupplyPopup from './SupplyPopUp';
import OtherPopup from './OtherPopup';
import ManageRequestView from '../views/ManageRequestView';
import Signup from './Signup'

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/signup">
                    <Signup />
                </Route>
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
                <Route path="/otherpopup">
                    <OtherPopup />
                </Route>
                <Route path="/manage-request">
                    <ManageRequestView />
                </Route>
                <Route path="/chat">
                    <ChatView />
                </Route>
                <Route path="/">
                    <Login />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;