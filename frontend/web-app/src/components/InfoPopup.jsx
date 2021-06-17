import { faWindowClose } from '@fortawesome/free-regular-svg-icons'
import React from 'react'
import '../css/Popup.css'
import '../fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import api from '../api/api';
import PhoneMarker from '../assets/phonemarker.png';
import ShopMarker from '../assets/shopmarker.png';
import MiscMarker from '../assets/miscmarker.png';

const infoStyle = {
    textAlign: "center"
}

const transform = {
    transform: "translate(25vw, 0)",
    minWidth: "640px"
}

function InfoPopup(props) {
    console.log(props)
    return (props.trigger) ? (
        <div className="popup">
            <div style={transform} className="popup-inner">
                <h2 style={infoStyle} className="headerStyle"> Requests Information </h2>
                <span className="closeBtn" onClick={() => props.setTrigger(false)}>
                    <FontAwesomeIcon className="icon" icon={faWindowClose} size="2x" />
                </span>
                <div className="col">
                    <div className="top">
                        <div className="imageContainer">
                            <img src={PhoneMarker} alt="phone_marker"/>
                        </div>
                        <div className="textContainer">
                            <span>Phone requests are for users that just want to have a chat! Make sure to be nice and friendly!</span>
                        </div>
                    </div>

                    <div className="mid">
                        <div className="imageContainer">
                            <img src={ShopMarker} alt="shop_marker"/>
                        </div>
                        <div className="textContainer">
                            <span>Supply run requests are for users that have difficulty buying their groceries and essentials! Help them out if you can!</span>
                        </div>
                    </div>

                    <div className="bot">
                        <div className="imageContainer">
                            <img src={MiscMarker} alt="misc_marker"/>
                        </div>
                        <div className="textContainer">
                            <span>Other requests are miscellaneous tasks that would help out a fellow user! This could be a dog walk, moving furniture or even some gardening! Make sure to read all the details!</span>
                        </div>
                    </div>

                </div>
        </div>
        </div>
    ) : "";
}

export default InfoPopup
