import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import api from '../api/api'
import '../css/CreateRequest.css'
import Autocomplete from "react-google-autocomplete";
import { store } from 'react-notifications-component';
import fromGivenAddress from "../api/geocode";
import { useHistory } from 'react-router-dom';

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
    let [location, setLocation] = React.useState("");
    let [details, setDetails] = React.useState("");
    let [locationComputed, setLocationComputed] = React.useState(null);
    let [title, setTitle] = React.useState("");
    const history = useHistory();
    
    var options = {
        types: ['geocode'],
        componentRestrictions: {country: "uk"}
       };

    function validateForm() {
        return location.length > 0  && details.length > 0 && title.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        var address = await fromGivenAddress(location).then(function(response) {
            return response;
        });
        setLocationComputed(address);
    }

    React.useEffect(() => {
        if(locationComputed == null) return;

        var formData = new FormData();
        formData.append('description',details);
        formData.append('title', title);
        formData.append('date', new Date().toJSON());
        formData.append('task_type', "OT");
        formData.append('delivery_addr', location);
        formData.append('d_longitude', locationComputed.lng);
        formData.append('d_latitude', locationComputed.lat);
        api.addTask(formData, localStorage.getItem('token')).then(function(response) {
            store.addNotification({
                title: "Task added!",
                message: "Successfuly added a task!",
                type: "success",
                insert: "top",
                container: "top-right",
                dismiss: {
                  duration: 5000,
                  onScreen: true
                }
            });
            history.push('/manage-request/');
        })
    }, [locationComputed]);

    return (
        <div className="formStyle">
            <div className="requestTitle">
                <h1 className="req">Other Request </h1>
            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Request Title</Form.Label>
                    <Form.Control style={input} type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Location</Form.Label>
                    {/* <Form.Control style={input} type="text" placeholder="Store location" value={storeLocation} onChange={(e) => setStoreLocation(e.target.value)}/> */}
                    <Autocomplete style={input} options={options} placeholder="Location of a task" apiKey={process.env.REACT_APP_API_KEY} inputAutocompleteValue={location}  onPlaceSelected={(place) => setLocation(place.formatted_address)}/>
                
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