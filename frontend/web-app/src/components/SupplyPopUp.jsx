import { faWindowClose } from '@fortawesome/free-regular-svg-icons'
import React from 'react'
import './Popup.css'
import '../fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function SupplyPopup() {
    return (
        <div className="popup">
            <div className="popup-inner">
                <h2 className="headingStyle">Supply Run Request</h2>
                <hr className="hseparator"></hr>
                <a classname="closeBtn" data-placement="top" data-toggle="tooltip" href=""> 
                <FontAwesomeIcon className="icon" icon={faWindowClose} size="2x" />
                </a>
                <div className="container">
                    <div className="leftContainer">
                        <h3 className="fieldTitle">First Name</h3>
                        <p className="fieldData">Dennis</p>
                        <h3 className="fieldTitle">Store Location</h3>
                        <p className="fieldData">66 Goldhawk Road, Shepherds Bush, W12 8HA</p>
                        <h3 className="fieldTitle">Delivery Address</h3>
                        <p className="fieldData">69 Biscay Road, London, W6 BJQ</p>
                        <h3 className="fieldTitle">Additional Details</h3>
                        <p className="fieldData">Hi I need help to pick up some medicine, I need
                        2 packs of strepsils. I put this pharmacy down but I dont mind where</p>
                    </div>
                    <div className="rightContainer">
                        <div className="mapContainer">
                            <p>Map goes here</p>
                        </div>
                        <div className="btnContainer">
                            <button className="accept-btn">Accept Request</button>
                        </div>
                    </div>
                    
                </div>
        </div>
        </div>
    )
}

export default SupplyPopup
