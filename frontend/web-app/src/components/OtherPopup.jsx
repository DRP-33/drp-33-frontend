import { faWindowClose } from '@fortawesome/free-regular-svg-icons'
import React from 'react'
import '../css/Popup.css'
import '../fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import api from '../api/api';


function OtherPopup(props) {
    //console.log(props);

    function accept() {
        var formData = new FormData();
        formData.append('task_id', props.props.task_id);
        formData.append('acceptor_id', '1');
        api.acceptTask(formData, localStorage.getItem('token'));
    }

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <h2 className="headerStyle">Other Request</h2>
                <span className="closeBtn" onClick={() => props.setTrigger(false)}> 
                    <FontAwesomeIcon className="icon" icon={faWindowClose} size="2x" />
                </span>
                <div className="pcontainer">
                    <div className="pleftContainer">
                        <h3 className="fieldTitle">First Name</h3>
                        <p className="fieldData">Dennis</p>
                        <h3 className="fieldTitle">Request Title</h3>
                        <p className="fieldData">{props.props.fields.title}</p>
                        <h3 className="fieldTitle">Additional Details</h3>
                        <p className="fieldData">{props.props.fields.description}</p>
                    </div>
                    <div className="prightContainer">
                        <p className="otherNote">Note: "Other" requests can vary widely and may not be reasonable. Please make sure to read "Additional details" in full.</p>
                        <div className="btnContainer">
                            <button className="accept-btn" onClick={() => accept()}>Accept Request</button>
                        </div>
                    </div>
                    
                </div>
        </div>
        </div>
    ) : "";
}

export default OtherPopup
