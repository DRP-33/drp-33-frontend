import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import api from '../api/api'

const formStyle = {
    width: '70%',
    marginTop: '8%'
}

function CreateRequest() {
    const [storeLocation, setStoreLocation] = React.useState("");
    const [deliveryAddress, setDeliveryAddress] = React.useState("");
    const [details, setDetails] = React.useState("");

    function validateForm() {
        return storeLocation.length > 0 && deliveryAddress.length > 0 && details.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        var formData = new FormData();
        //console.log(fromGivenAddress(storeLocation));
        formData.append('description',details);
        formData.append('date', new Date().toJSON());
        formData.append('task_type', "SR");
        formData.append('s_longitude', /*fromGivenAddress(storeLocation).lng*/ -0.2620758943035952);
        formData.append('s_latitude', /*fromGivenAddress(storeLocation).lat*/ 51.523001163042466);
        formData.append('d_longitude', /*fromGivenAddress(deliveryAddress).lng*/ -0.2620758943035952);
        formData.append('d_latitude', /*fromGivenAddress(deliveryAddress).lat*/ 51.523001163042466);
        //console.log(formData);
        api.addTask(formData, localStorage.getItem('token')).then(function(response) {
            alert("Task added");
        })
    }

    return (
        <div style={formStyle}>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Store Location</Form.Label>
                    <Form.Control type="text" placeholder="Enter store location" value={storeLocation} onChange={(e) => setStoreLocation(e.target.value)}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Delivery Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter delivery address" value={deliveryAddress} onChange={(e) => setDeliveryAddress(e.target.value)}/>
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