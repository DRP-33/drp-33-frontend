import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useHistory } from "react-router-dom";
import api from '../api/api'

const containerStyle = {
    width: '80%',
    height: '100vh',
    backgroundColor: "#E25353",
    float: 'right'
};

function CreateRequest() {
    const [phonenumber, setPhonenumber] = React.useState(0);
    const [availablehours, setPassword] = React.useState(0);
    const history = useHistory();

    function validateForm() {
        return phonenumber > 0 && availablehours > 0;
    }

    return (
        <div style={containerStyle}>
            <h1>FORM GOES HERE</h1>
            <Form>
                <Button variant="primary" type="create" disabled={!validateForm()}>
                    Create
                </Button>
            </Form>
        </div>
    )
}

export default CreateRequest;