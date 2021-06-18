import React from 'react';
import Pin from './Pin.jsx';
import api from '../api/api';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import PhonePopup from './PhonePopup.jsx';
import SupplyPopUp from './SupplyPopUp.jsx';
import OtherPopup from './OtherPopup.jsx';



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
    let [buttonPopUp, setButtonPopUp] = React.useState(false);
    let [myTasks, setMyTasks] = React.useState([]);

    React.useEffect(() => {
        //console.log('Token ' + localStorage.getItem('token'));
        api.getTask(localStorage.getItem('token')).then(function (response){
            setData(response.data);
            setLen(response.data.length);
        });

        api.myTasks(localStorage.getItem('token')).then(function (response){
            setMyTasks(response.data);
        });
    }, []);

    function markers() {
        var marker = [];
        console.log(myTasks);
        for(var i = 0; i < len; i++) {
            var notMine = true;
            for(var j = 0; j < myTasks.length; j++) {
                if(myTasks[j].pk === data[i].pk) {
                    notMine = false;
                }
            }
            if(notMine) {
                marker.push(Pin({fields: data[i].fields, key: data[i].pk, func: {showPopUp}}));
            }
        }
        return marker;
    }

    const showPopUp = (data) => {
        console.log(data);
        setPopUpData(data);
        setButtonPopUp(true);
        if(data.fields.t_type === 'PR') {
            setPopUp(1);
        } else if (data.fields.t_type === 'SP') {
            setPopUp(2);
        } else {
            setPopUp(3);
        }
    }

    function renderPopUp() {
        if(popUp === 1) {
            return PhonePopup(popUpData);
        } else if(popUp === 2)  {
            return <SupplyPopUp props={popUpData} trigger={buttonPopUp} setTrigger={setButtonPopUp}/>
        } else {
            return <OtherPopup props={popUpData} trigger={buttonPopUp} setTrigger={setButtonPopUp}/>
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