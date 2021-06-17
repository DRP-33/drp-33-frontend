import { Marker } from '@react-google-maps/api';
import PhoneMarker from '../assets/phonemarker.png';
import ShopMarker from '../assets/shopmarker.png';
import MiscMarker from '../assets/miscmarker.png';

function Pin(props) {
    var position = {lat: parseFloat(props.fields.s_latitude), lng: parseFloat(props.fields.s_longitude)};
    var key = props.key;
    var data = { fields: props.fields, task_id: key };
    var type = props.fields.t_type;
    var icon = "";
    if (type === 'PC') {
        icon = PhoneMarker
    } else if (type === 'SP') {
        icon = ShopMarker
    } else {
        icon = MiscMarker
    }
    //console.log(props);
    return (
        <Marker 
            key = {key} 
            position={position}
            icon={icon}
            onClick={() => props.func.showPopUp(data)}
            />
    )
}

export default Pin;