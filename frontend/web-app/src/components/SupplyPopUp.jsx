import { faWindowClose } from '@fortawesome/free-regular-svg-icons'
import React from 'react'
import '../css/Popup.css'
import '../fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import api from '../api/api';


function SupplyPopup(props) {
    console.log(props);

    function accept() {
        var formData = new FormData();
        formData.append('task_id', props.task_id);
        formData.append('acceptor_id', '1');
        api.acceptTask(formData, localStorage.getItem('token'));
    }

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2 className="headingStyle">Supply Run Request</h2>
                <hr className="hseparator"></hr>
                <a className="closeBtn" data-placement="top" data-toggle="tooltip" href=""> 
                <FontAwesomeIcon className="icon" icon={faWindowClose} size="2x" />
                </a>
                <div className="container">
                    <div className="leftContainer">
                        <h3 className="fieldTitle">First Name</h3>
                        <p className="fieldData">Dennis</p>
                        <h3 className="fieldTitle">Store Location</h3>
                        <p className="fieldData">{props.fields.store_addr}</p>
                        <h3 className="fieldTitle">Delivery Address</h3>
                        <p className="fieldData">{props.fields.delivery_addr}</p>
                        <h3 className="fieldTitle">Additional Details</h3>
                        <p className="fieldData">{props.fields.description}</p>
                    </div>
                    <div className="rightContainer">
                        
                        <div className="btnContainer">
                            <button className="accept-btn" onClick={() => accept()}>Accept Request</button>
                        </div>
                    </div>
                    
                </div>
        </div>
        </div>
    )
}

export default SupplyPopup
