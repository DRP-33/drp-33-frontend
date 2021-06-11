import { Marker } from '@react-google-maps/api';

function Pin(props) {
    var position = {lat: parseFloat(props.fields.s_latitude), lng: parseFloat(props.fields.s_longitude)};
    var key = props.key;
    var data = { fields: props.fields, task_id: key };
    return (
        <Marker 
            key = {key} 
            position={position} 
            onClick={() => props.func.showPopUp(data)}
            />
    )
}

export default Pin;