import { Marker } from '@react-google-maps/api';
import api from '../api/api';

function Pin(props) {
    var position = {lat: parseFloat(props.fields.s_latitude), lng: parseFloat(props.fields.s_longitude)};
    var key = props.key;
    
    function onClick(key) {
        var formData = new FormData();
        formData.append('task_id', key);
        formData.append('acceptor_id', '1');
        api.acceptTask(formData, localStorage.getItem('token'));
    }

    return (
        <Marker 
            key = {key} 
            position={position} 
            onClick={() => onClick(key)}
            />
    )
}

export default Pin;