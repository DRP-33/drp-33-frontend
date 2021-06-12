import React from 'react'
import ManageRequest from '../components/ManageRequest'
import Sidebar from '../components/Sidebar.jsx'

const ManageRequestStyle = {
    height: "100vh",
    width: "100%"
}

function ManageRequestView() {
    return (
        <div style={ManageRequestStyle}>
            <Sidebar/>
            <ManageRequest/>
        </div>
    )
}

export default ManageRequestView
