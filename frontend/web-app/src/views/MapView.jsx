import {React, Component} from 'react'
import MapComponent from '../components/map.jsx'
import Sidebar from '../components/Sidebar.jsx'
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import api from '../api/api'

const MapViewStyle = {
    height: "100vh",
    width: "100%"
}

/*function MapView() {
    return (
        <div style={MapViewStyle}>
            <Sidebar/>
            <MapComponent/>
        </div>
    )
}*/

class MapView extends Component {

    state = {}

    addMarker = (props) => {
        let marker = {
            position: props.position(),
            key: props.key(),
            map: null
        };
        let markers = [...this.state.markers, marker]
        this.setState(markers)
    }

    render() {
        return (
            <div style={MapViewStyle}>
                <Sidebar/>
                <MapComponent markers={this.state.markers} addMarker={this.addMarker}/>
            </div>
        )
    }
}

export default MapView;