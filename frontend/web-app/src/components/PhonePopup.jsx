import { faWindowClose } from '@fortawesome/free-regular-svg-icons'
import React from 'react'
import '../css/Popup.css'
import '../fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function PhonePopup() {
    return (
        <div className="popup">
            <div className="popup-inner">
                <h2 className="headerStyle">Phone Call Request</h2>
                <hr className="hseparator"></hr>
                <a className="closeBtn" data-placement="top" data-toggle="tooltip" href=""> 
                <FontAwesomeIcon className="icon" icon={faWindowClose} size="2x" />
                </a>
                <div className="pcontainer">
                    <div className="pleftContainer">
                        <h3 className="fieldTitle">First Name</h3>
                        <p className="fieldData">Steve</p>
                        <h3 className="fieldTitle">Phone Number</h3>
                        <p className="fieldData">01234 567 890</p>
                        <h3 className="fieldTitle">Available Hours</h3>
                        <p className="fieldData">7pm-10pm, Mon-Fri</p>
                        <h3 className="fieldTitle">Additional Details</h3>
                        <p className="fieldData">please call me, feeling lonely</p>
                    </div>
                    <div className="prightContainer">
                        <div className="btnContainer">
                            <button className="accept-btn">Accept Request</button>
                        </div>
                    </div>
                    
                </div>
        </div>
        </div>
    )
}

export default PhonePopup
