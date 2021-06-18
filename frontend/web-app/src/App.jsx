import React from 'react'
import Router from './components/Router.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

function App() {
    return (
        <div>
            <ReactNotification />
            <Router />
        </div>
    )
}

export default App;