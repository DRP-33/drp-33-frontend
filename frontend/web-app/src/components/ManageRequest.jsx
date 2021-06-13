import { faArrowLeft, faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../fontawesome';
import '../css/ManageRequest.css'
import React from 'react';
import { useHistory } from "react-router-dom";


function ManageRequest() {
    const history = useHistory();
    return (
        <div className="manageRequestStyle">
            <div className="backToMap" onClick={() => history.push('/map')}>
                <FontAwesomeIcon className="backToMapStyle" icon={faArrowLeft} size="1x" />
                <span className="backToMapText"> Back to the map </span>
            </div>

            <div className="container">
                <div className="leftContainer">
                    <h1 className="colTitle">Accepted Requests</h1>
                        <div className="reqBox">
                            <FontAwesomeIcon className="iconStyle" icon={faCalendar} size="2x" />
                        </div>
                        <div className="reqBox">
                            <FontAwesomeIcon className="iconStyle" icon={faCalendar} size="2x" />
                        </div>
                    
                </div>
                <div className="rightContainer">
                    <h1 className="colTitle">My Requests</h1>
                    <div className="reqBox">
                            <FontAwesomeIcon className="iconStyle" icon={faCalendar} size="2x" />
                        </div>
                        <div className="reqBox">
                            <FontAwesomeIcon className="iconStyle" icon={faCalendar} size="2x" />
                        </div>
                </div>
            </div>
        </div>
    )
}

export default ManageRequest
