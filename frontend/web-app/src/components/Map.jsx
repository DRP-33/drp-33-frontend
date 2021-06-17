import React from 'react';
import Pin from './Pin.jsx';
import api from '../api/api';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import PhonePopup from './PhonePopup.jsx';
import SupplyPopUp from './SupplyPopUp.jsx';


// container style
const containerStyle = {
    width: '80%',
    height: '100vh',
    float: 'right'
};

const defaultMapOptions = {
    disableDefaultUI: true,
};

//center of a map
const center = {
    lat: 51.49954166513176,
    lng: -0.17449287744865882
};

// functional map component
function MapComponent() {
    let [data, setData] = React.useState([]);
    let [len, setLen] = React.useState(0);
    let [popUpData, setPopUpData] = React.useState([]);
    let [popUp, setPopUp] = React.useState(0);
    let [myTasks, setMyTasks] = React.useState([]);

    React.useEffect(() => {
        //console.log('Token ' + localStorage.getItem('token'));
        api.getTask(localStorage.getItem('token')).then(function (response){
            setMyTasks(response.data);
        });

        api.myTasks(localStorage.getItem('token')).then(function (response){
            setData(response.data);
            setLen(response.data.length);
        });
    }, []);

    function markers() {
        var marker = [];
        //console.log(len);
        for(var i = 0; i < len; i++) {
            if (!myTasks.includes(data[i])) {
                marker.push(Pin({fields: data[i].fields, key: data[i].pk, func: {showPopUp}}));
            }
        }
        return marker;
    }

    const showPopUp = (data) => {
        setPopUpData(data);
        if(data.fields.task_type === 'PR') {
            setPopUp(1);
        } else {
            setPopUp(2);
        }
    }

    function renderPopUp() {
        if(popUp === 1) {
            return PhonePopup(popUpData);
        } else if(popUp === 2)  {
            return SupplyPopUp(popUpData);
        }
    }

    return (
        <LoadScript googleMapsApiKey = {process.env.REACT_APP_API_KEY} >
            <GoogleMap
                id = { "map" }
                mapContainerStyle = { containerStyle }
                center = { center }
                zoom = { 15 }
                clickableIcons = { false }
                options = {defaultMapOptions}
            >
            {markers()}
            {renderPopUp()}
            </GoogleMap>
            
        </LoadScript>
    )
}

// For now auto-accepts, for later will display overlay and ask to accept



export default MapComponent;