import React from 'react'
import Sidebar from '../components/Sidebar.jsx'
import CreatePhoneRequest from '../components/CreatePhoneRequest.jsx'
import CreateSupplyRunRequest from '../components/CreateSupplyRunRequest.jsx'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import '../css/CreateRequest.css'

const CreateRequestViewStyle = {
    height: "100vh",
    width: "100%",
    
}

const headingStyle = {
    padding: 'auto',
    marginBottom: '5%',
    color: "white"
}

function CreateRequestView() {
    const [id, setId] = React.useState(0);
    return (
        <div style={CreateRequestViewStyle}>
            <Sidebar/>
            <div className="containerStyle">
                <h1 style={headingStyle}>Create new request</h1>
                <DropdownButton id="dropdown-basic-button" title="Pick a type of request">
                    <Dropdown.Item onClick={() => setId(1)}>Phone Request</Dropdown.Item>
                    <Dropdown.Item onClick={() => setId(2)}>Supply Run Request</Dropdown.Item>
                </DropdownButton>
                {id === 1 && <CreatePhoneRequest/>}
                {id === 2 && <CreateSupplyRunRequest/>}
            </div>
        </div>
    )
}

export default CreateRequestView;