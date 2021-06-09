import React from 'react'
import Sidebar from '../components/Sidebar.jsx'
import CreateRequest from '../components/CreateRequest.jsx'

const CreateRequestViewStyle = {
    height: "100vh",
    width: "100%"
}

function CreateRequestView() {
    return (
        <div style={CreateRequestViewStyle}>
            <Sidebar/>
            <CreateRequest/>
        </div>
    )
}

export default CreateRequestView;