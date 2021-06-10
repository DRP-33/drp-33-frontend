import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useHistory } from "react-router-dom";
import api from '../api/api'

const formStyle = {
    width: '70%',
    marginTop: '8%'
}

function CreateRequest() {
    const [phonenumber, setPhonenumber] = React.useState("");
    const [availableHours, setAvailablehours] = React.useState("");
    const [details, setDetails] = React.useState("");
    const history = useHistory();

    function validateForm() {
        return phonenumber.length > 0 && availableHours.length > 0 && details.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        var formData = new FormData();
        formData.append('description',details);
        formData.append('date', new Date().toJSON());
        formData.append('task_type', "PC");
        formData.append('phone_number', phonenumber);
        api.addTask(formData, localStorage.getItem('token')).then(function(response) {
            alert("Task added");
        })
    }

    return (
        <div style={formStyle}>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter phone number" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Available Hours</Form.Label>
                    <Form.Control type="text" placeholder="00:00 - 23:59" value={availableHours} onChange={(e) => setAvailablehours(e.target.value)}/>
                </Form.Group>
                
                <Form.Group>
                    <Form.Label>Additional details</Form.Label>
                    <Form.Control as="textarea" placeholder="Enter details here" rows={3} value={details} onChange={(e) => setDetails(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!validateForm()}>
                    Create
                </Button>
            </Form>
        </div>
    )
}

export default CreateRequest;