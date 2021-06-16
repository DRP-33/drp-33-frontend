import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import api from '../api/api'
import '../css/CreateRequest.css'

const input = {
    display: "block",
    appearance: "none",
    outline: "0",
    border: "1px solid white",
    backgroundColor: "white",
    width: "250px",
    borderRadius: "3px",
    padding: "10px 15px",
    margin: "0 auto 10px auto",
    textAlign: "center",
    fontSize: "18px",
    color: "black",
    fontWeight: "300",
    
}

const additionalInput = {
    display: "block",
    appearance: "none",
    outline: "0",
    border: "1px solid fade(white, 40%)",
    backgroundColor: "fade(white, 20%)",
    width: "500px",
    borderRadius: "3px",
    padding: "10px 15px",
    margin: "0 auto 10px auto",
    textAlign: "center",
    fontSize: "18px",
    color: "black",
    fontWeight: "300",
    
}

function CreateRequest() {
    const [phonenumber, setPhonenumber] = React.useState("");
    const [availableHours, setAvailablehours] = React.useState("");
    const [details, setDetails] = React.useState("");

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
        <div className="formStyle">
            <div className="requestTitle">
                <h1 className="req">Phone Request </h1>
            </div>
            <Form onSubmit={handleSubmit}>
            
                <Form.Group>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control style={input} type="text" placeholder="Phone number" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Available Hours</Form.Label>
                    <Form.Control style={input} type="text" placeholder="00:00 - 23:59" value={availableHours} onChange={(e) => setAvailablehours(e.target.value)}/>
                </Form.Group>
                
                <Form.Group>
                    <Form.Label>Additional details</Form.Label>
                    <Form.Control style={additionalInput} as="textarea" placeholder="Enter details here" rows={3} value={details} onChange={(e) => setDetails(e.target.value)}/>
                </Form.Group>
                <Button className="bttn" variant="primary" type="submit" disabled={!validateForm()}>
                    Create Request
                </Button>
            </Form>
        </div>
    )
}

export default CreateRequest;