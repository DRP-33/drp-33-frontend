import React from 'react';
import Pin from './Pin.jsx';
import api from '../api/api';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

// container style
const containerStyle = {
    width: '80%',
    height: '100vh',
    float: 'right'
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

    React.useEffect(() => {
        //console.log('Token ' + localStorage.getItem('token'));
        api.getTask(localStorage.getItem('token')).then(function (response){
            setData(response.data);
            setLen(response.data.length);
        });
    }, []);

    function markers() {
        var marker = [];
        //console.log(len);
        for(var i = 0; i < len; i++) {
            marker.push(Pin({fields: data[i].fields, key: data[i].pk}));
        }
        return marker;
    }

    return (
        <LoadScript googleMapsApiKey = {process.env.REACT_APP_API_KEY} >
            <GoogleMap
                id = { "map" }
                mapContainerStyle = { containerStyle }
                center = { center }
                zoom = { 15 }
                clickableIcons = { false }
            >
            {markers()}
            </GoogleMap>
            
        </LoadScript>
    )
}

// For now auto-accepts, for later will display overlay and ask to accept



export default MapComponent;