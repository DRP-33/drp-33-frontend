import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faPlus, faTasks, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../fontawesome';
import { useHistory } from "react-router-dom";
import '../css/Sidebar.css'
import PhoneMarker from '../assets/phonemarker.png';
import ShopMarker from '../assets/shopmarker.png';
import MiscMarker from '../assets/miscmarker.png';

function Sidebar() {
    const history = useHistory();
    return (
        <div className="sidebarStyle">
            <h1 className="headingStyle">DRP33</h1>
            <div>
            <ul className="listStyle">  
                <li className=" clickableListEntry" onClick={() => history.push('/map')}>
                    <FontAwesomeIcon className="sIconStyle" icon={faMapMarkedAlt} size="2x" />
                    <span id="task_text" className="bodyStyle">View Requests on Map </span>
                </li>
                <li className=" clickableListEntry" onClick={() => history.push('/create-request')}>
                    <FontAwesomeIcon className="sIconStyle" icon={faPlus} size="2x" />
                    <span id="task_text" className="bodyStyle"> Create New Request </span>
                </li>
                <li className=" clickableListEntry" onClick={() => history.push('/manage-request')}>
                    <FontAwesomeIcon className="sIconStyle" icon={faTasks} size="2x" />
                    <span id="task_text" className=" bodyStyle">Manage My Requests </span>
                </li>   
            </ul>
            </div>

            <hr className=" topSeparator"></hr>

            <div> 
            <ul className="listStyle">
                <li className="listEntry" >
                <p title="" data-placement="top" data-toggle="tooltip" className="inlineImg"> 
                <img src={PhoneMarker} alt="phone_marker"/>
                <span id="task_text" className=" bodyStyle"> Phone Call </span></p>
                </li>
                <li className=" listEntry">
                <p title="" data-placement="top" data-toggle="tooltip" className="inlineImg"> 
                <img src={ShopMarker} alt="shop_marker"/>
                <span id="task_text" className=" bodyStyle"> Supply Run </span></p>
                </li>
                <li className=" listEntry">
                <p title="" data-placement="top" data-toggle="tooltip" className="inlineImg"> 
                <img src={MiscMarker} alt="misc_marker"/>                
                <span id="task_text" className=" bodyStyle">  Other Request </span></p>
                </li>
            </ul>
            </div>
            

            <div className=" manageProfile">
            <hr className=" bottomSeparator"></hr>
        
            <ul className="listStyle">
                <li className=" clickableListEntry">
                <p title="" data-placement="top" data-toggle="tooltip" className="inlineImg"> 
                <FontAwesomeIcon className="sIconStyle" icon={faUser} size="2x" />
                <span id="task_text" className=" bodyStyle"> Manage my profile </span></p>
                </li>
            </ul>
            </div>

        </div>
    )
};

export default Sidebar;