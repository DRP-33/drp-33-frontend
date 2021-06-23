import { faWindowClose } from '@fortawesome/free-regular-svg-icons'
import React from 'react'
import '../css/Popup.css'
import '../fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import api from '../api/api';
import { store } from 'react-notifications-component';

function SupplyPopup(props) {
    let [user, setUser] = React.useState("");

    function accept() {
        var formData = new FormData();
        formData.append('task_id', props.props.task_id);
        formData.append('acceptor_id', '1');
        api.acceptTask(formData, localStorage.getItem('token')).then(() => {
            store.addNotification({
                title: "Accepted request",
                message: "Succesfully accepted a request!",
                type: "success",
                insert: "top",
                container: "top-right",
                dismiss: {
                  duration: 5000,
                  onScreen: true
                }
            });
        });
        props.setTrigger(false);
    }

    React.useEffect(() => {
        var formData = new FormData();
        formData.append('user_id', props.props.fields.requestor_id);
        api.getUser(formData, localStorage.getItem('token')).then(function(response) {
            setUser(response.data);
        }).catch((error) => {
            alert("Something went wrong");   
        });
    }, []);

 
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <h2 className="headerStyle">Supply Run Request</h2>
                <span className="closeBtn" onClick={() => props.setTrigger(false)}> 
                    <FontAwesomeIcon className="icon" icon={faWindowClose} size="2x" />
                </span>
                <div className="pcontainer">
                    <div className="pleftContainer">
                        <h3 className="fieldTitle">First Name</h3>
                        <p className="fieldData">{user.username}</p>
                        <h3 className="fieldTitle">Store Location</h3>
                        <p className="fieldData">{props.props.fields.store_addr}</p>
                        <h3 className="fieldTitle">Delivery Address</h3>
                        <p className="fieldData">{props.props.fields.delivery_addr}</p>
                        <h3 className="fieldTitle">Additional Details</h3>
                        <p className="fieldData">{props.props.fields.description}</p>
                    </div>
                    <div className="prightContainer">
                        
                        <div className="btnContainer">
                            <button className="accept-btn" onClick={() => accept()}>Accept Request</button>
                        </div>
                    </div>
                    
                </div>
        </div>
        </div>
    ) : "";
}

export default SupplyPopup
