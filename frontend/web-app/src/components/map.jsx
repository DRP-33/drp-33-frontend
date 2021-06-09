import React, {Component} from 'react';
import api from '../api/api'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

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

const key = 2
const position = {
    lat: 51.49954166515176,
    lng: -0.17349217744885882
};
const message = "Marker working"

const markers = [Marker1]

// functional map component
/*function MapComponent() {
    let [key, setKey] = React.useState(0);
    let [message, setMessage] = React.useState('');
    let [position, setPosition] = React.useState({lat: 0, lng: 0});
    React.useEffect(() => {
        api.getTask().then(function (response){
            setKey(response.data[0].pk);
            setMessage(response.data[0].fields.description);
            setPosition({lat: parseFloat(response.data[0].fields.s_latitude), lng: parseFloat(response.data[0].fields.s_longitude)})
        });
    }, []);

    return (
        //<LoadScript googleMapsApiKey = {process.env.REACT_APP_API_KEY} >
        <LoadScript googleMapsApiKey = {"AIzaSyB-lFtvpDUWfhVdQ2U05Sm5iOLe5anZ0rs"} >
            <GoogleMap
                id = { "map" }
                mapContainerStyle = { containerStyle }
                center = { center }
                zoom = { 15 }
                clickableIcons = { false }
            >
            </GoogleMap>
        </LoadScript>
    )
}*/

class MapComponent extends Component {
    constructor(props) {
        super(props)
        this.map = null
    }

    componentDidMount() {
        this.map = new GoogleMap({
            id: "map",
            mapContainerStyle: containerStyle,
            center: center,
            zoom: 15,
            clickableIcons: false
        })

        this.placeMMarkers(this.map)
    }

    componentDidUpdate() {
        this.placeMMarkers(this.map)
    }

    placeMMarkers = (map) => {
        markers.forEach((m) => {
            m.map = map;
           let marker= new Marker(m)
         }
       );
     }

     render() {
         console.log(this.map)
        return(
            <LoadScript googleMapsApiKey = {"AIzaSyB-lFtvpDUWfhVdQ2U05Sm5iOLe5anZ0rs"} >
                <div ref={this.map.getRef()}/>
            </LoadScript>
        )}
}

function Marker1() {
    <Marker 
    key = {key} 
    position={position} 
    onClick={() => onClick(key, message)}
    map={this.map}/>
    console.log("marker test")
}

// For now auto-accepts, for later will display overlay and ask to accept
function onClick(key, message) {
    var formData = new FormData();
    formData.append('id', '3');
    formData.append('acceptor_id', '1');
    api.acceptTask(formData);
    
    document.getElementById('task_text').innerText = message;
}


export default MapComponent;