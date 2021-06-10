import { faUser, faCalendar, faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../fontawesome';
import { useHistory } from "react-router-dom";

const sidebarStyle = {
    width: "20%",
    float: "left",
    height: "100vh",
    backgroundColor: "#E25353",
    position: "relative",
    padding: "0.5%"
}

const headingStyle = {
    fontFamily: "Saira",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "40px",
    lineHeight: "63px",
    alignItems: "center",
    textAlign: "center",
    color: "#FFFFFF",
    marginTop: "7%",
    padding: "2%"
}

const bodyStyle = {
    fontFamily: "Saira",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "25px",
    alignItems: "center",
    textAlign: "center",
    color: "#FFFFFF",
    padding: "2%"
}

const listStyle = {
    listStyleType: "none",
    fontSize: "80%"
}

const listEntry = {
    margin: "20px 0"
}

const inlineImg = {
    textDecoration: "none"
}

const iconStyle = {
    color: "white",
    position: "relative",
    alignItems: "center",
    marginRight: "20px",
    top: "5px",
    left: "5px"
}

// made both these (they are the same currently) because i cant seem to make the bottom one go to the bottom
const topSeparator = {
    color: "white",
    backgroundColor: "white",
    margin: "10% 5%",
    height: "3px",
}

const bottomSeparator = {
    color: "white",
    backgroundColor: "white",
    margin: "10% 5%", 
    height: "3px"
}

function Sidebar() {
    const history = useHistory();
    return (
        <div style={ sidebarStyle }>
            <h1 style={ headingStyle } onClick={() => history.push('/map')}>My tasks</h1>
            <div>
            <ul class ="tasks" style= { listStyle }>
                <li style={ listEntry } onClick={() => history.push('/create-request')}>
                <a title="" data-placement="top" data-toggle="tooltip" style={inlineImg}> 
                <FontAwesomeIcon style={iconStyle} icon={faPlusSquare} size="2x" />
                <span id="task_text" style={ bodyStyle }> Create New Request </span></a>
                </li>
                <li style={ listEntry }>
                <a title="" data-placement="top" data-toggle="tooltip" style={inlineImg}> 
                <FontAwesomeIcon style={iconStyle} icon={faCalendar} size="2x" />
                <span id="task_text" style={ bodyStyle }>  Manage My Requests </span></a>
                </li>
            </ul>
            </div>

            <hr style={ topSeparator }></hr>

            <div> 
            <ul class ="tasks" style= { listStyle }>
                <li style={ listEntry }>
                <p title="" data-placement="top" data-toggle="tooltip" style={inlineImg}> 
                <FontAwesomeIcon style={iconStyle} icon={faCalendar} size="2x" />
                <span id="task_text" style={ bodyStyle }> Phone Call </span></p>
                </li>
                <li style={ listEntry }>
                <p title="" data-placement="top" data-toggle="tooltip" style={inlineImg}> 
                <FontAwesomeIcon style={iconStyle} icon={faCalendar} size="2x" />
                <span id="task_text" style={ bodyStyle }> Supply Run </span></p>
                </li>
                <li style={ listEntry }>
                <p title="" data-placement="top" data-toggle="tooltip" style={inlineImg}> 
                <FontAwesomeIcon style={iconStyle} icon={faCalendar} size="2x" />
                <span id="task_text" style={ bodyStyle }>  Other Request </span></p>
                </li>
            </ul>
            </div>
            
            <hr style={ bottomSeparator }></hr>
            
            <ul class ="tasks" style= { listStyle }>
                <li style={ listEntry }>
                <p title="" data-placement="top" data-toggle="tooltip" style={inlineImg}> 
                <FontAwesomeIcon style={iconStyle} icon={faUser} size="2x" />
                <span id="task_text" style={ bodyStyle }> Manage my profile </span></p>
                </li>
            </ul>

        </div>
    )
};

export default Sidebar;