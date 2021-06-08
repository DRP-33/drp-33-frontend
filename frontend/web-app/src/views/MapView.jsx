import React from 'react'
import MapComponent from '../components/Map.jsx'
import Sidebar from '../components/Sidebar.jsx'

const MapViewStyle = {
    height: "100vh",
    width: "100%"
}

function MapView() {
    return (
        <div style={MapViewStyle}>
            <Sidebar/>
            <MapComponent/>
        </div>
    )
}

export default MapView;