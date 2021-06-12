import { faUser, faCalendar, faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { faPlus, faTasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../fontawesome';
import { useHistory } from "react-router-dom";
import '../css/Sidebar.css'

function Sidebar() {
    const history = useHistory();
    return (
        <div className="sidebarStyle">
            <h1 className="headingStyle" onClick={() => history.push('/map')}>My tasks</h1>
            <div>
            <ul className="listStyle">
                <li className=" clickableListEntry" onClick={() => history.push('/create-request')}>
                    <FontAwesomeIcon className="iconStyle" icon={faPlus} size="2x" />
                    <span id="task_text" className="bodyStyle"> Create New Request </span>
                </li>
                <li className=" clickableListEntry" onClick={() => history.push('/manage-request')}>
                    <FontAwesomeIcon className="iconStyle" icon={faTasks} size="2x" />
                    <span id="task_text" className=" bodyStyle">  Manage My Requests </span>
                </li>
            </ul>
            </div>

            <hr className=" topSeparator"></hr>

            <div> 
            <ul className="listStyle">
                <li className="listEntry" >
                <p title="" data-placement="top" data-toggle="tooltip" className="inlineImg"> 
                <FontAwesomeIcon className="iconStyle" icon={faCalendar} size="2x" />
                <span id="task_text" className=" bodyStyle"> Phone Call </span></p>
                </li>
                <li className=" listEntry">
                <p title="" data-placement="top" data-toggle="tooltip" className="inlineImg"> 
                <FontAwesomeIcon className="iconStyle" icon={faCalendar} size="2x" />
                <span id="task_text" className=" bodyStyle"> Supply Run </span></p>
                </li>
                <li className=" listEntry">
                <p title="" data-placement="top" data-toggle="tooltip" className="inlineImg"> 
                <FontAwesomeIcon className="iconStyle" icon={faCalendar} size="2x" />
                <span id="task_text" className=" bodyStyle">  Other Request </span></p>
                </li>
            </ul>
            </div>
            

            <div className=" manageProfile">
            <hr className=" bottomSeparator"></hr>
        
            <ul className="listStyle">
                <li className=" clickableListEntry">
                <p title="" data-placement="top" data-toggle="tooltip" className="inlineImg"> 
                <FontAwesomeIcon className="iconStyle" icon={faUser} size="2x" />
                <span id="task_text" className=" bodyStyle"> Manage my profile </span></p>
                </li>
            </ul>
            </div>

        </div>
    )
};

export default Sidebar;