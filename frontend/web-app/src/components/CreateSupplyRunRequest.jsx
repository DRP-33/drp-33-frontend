import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import api from '../api/api'
import '../css/CreateRequest.css'
import Autocomplete from "react-google-autocomplete";

const input = {
    display: "block",
    appearance: "none",
    outline: "0",
    border: "1px solid white",
    backgroundColor: "fade(white, 20%)",
    width: "450px",
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
    border: "1px solid white",
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
    const [storeLocation, setStoreLocation] = React.useState("");
    const [deliveryAddress, setDeliveryAddress] = React.useState("");
    const [details, setDetails] = React.useState("");
    var options = {
        types: ['geocode'],
        componentRestrictions: {country: "uk"}
       };
    const [title, setTitle] = React.useState("");

    function validateForm() {
        return storeLocation.length > 0 && deliveryAddress.length > 0 && details.length > 0 && title.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        var formData = new FormData();
        //console.log(fromGivenAddress(storeLocation));
        formData.append('description',details);
        formData.append('title', title);
        formData.append('date', new Date().toJSON());
        formData.append('task_type', "SP");
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
        <div className="formStyle">
            <div className="requestTitle">
                <h1 className="req">Supply Run Request </h1>
            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Request Title</Form.Label>
                    <Form.Control style={input} type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Store Location</Form.Label>
                    {/* <Form.Control style={input} type="text" placeholder="Store location" value={storeLocation} onChange={(e) => setStoreLocation(e.target.value)}/> */}
                    <Autocomplete style={input} options= {options} placeholder="Store location" apiKey={process.env.REACT_APP_API_KEY} value={storeLocation} onChange={(e) => setStoreLocation(e.target.value)}/>
                
                </Form.Group>

                <Form.Group>
                    <Form.Label>Delivery Address</Form.Label>
                    {/* <Form.Control style={input} type="text" placeholder="Delivery address" value={deliveryAddress} onChange={(e) => setDeliveryAddress(e.target.value)}/> */}
                    <Autocomplete style={input} options= {options}placeholder="Delivery address" apiKey={process.env.REACT_APP_API_KEY} value={deliveryAddress}  onChange={(e) => setDeliveryAddress(e.target.value)}/>
                </Form.Group>
                
                <Form.Group>
                    <Form.Label>Additional details</Form.Label>
                    <Form.Control style={additionalInput} as="textarea" placeholder="Enter details here" rows={3} value={details} onChange={(e) => setDetails(e.target.value)}/>
                </Form.Group>
                <Button className="bttn"variant="primary" type="submit" disabled={!validateForm()}>
                    Create Request
                </Button>
            </Form>
        </div>
    )
}

export default CreateRequest;