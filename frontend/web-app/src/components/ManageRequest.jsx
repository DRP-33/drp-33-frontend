import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../fontawesome';
import '../css/ManageRequest.css'
import React from 'react';
import { useHistory } from "react-router-dom";
import api from '../api/api.js';
import TaskElem from './TaskElem.jsx'

function ManageRequest() {
    const [myTasks, setMyTasks] = React.useState([]);
    const [acceptedTasks, setAcceptedTasks] = React.useState([]);
    const [myLen, setMyLen] = React.useState(0);
    const [acceptedLen, setAcceptedLen] = React.useState(0);

    React.useEffect(() => {
        //console.log('Token ' + localStorage.getItem('token'));
        api.myTasks(localStorage.getItem('token')).then(function (response){
            setMyTasks(response.data);
            setMyLen(response.data.length);
            //console.log('MyTasks: ' + myTasks);
        });
        api.acceptedTasks(localStorage.getItem('token')).then(function (response){
            setAcceptedTasks(response.data);
            setAcceptedLen(response.data.length);
            //console.log('Accepted: ' + response.data.length + acceptedTasks);
        });

    }, []);

    function accpetedRequests() {
        var requests = [];
        for(var i = 0; i < acceptedLen; i++) {
            requests.push(TaskElem(acceptedTasks[i]))
        }
        return requests;
    }

    function myRequests() {
        var requests = [];
        for(var i = 0; i < myLen; i++) {
            requests.push(TaskElem(myTasks[i]))
        }
        return requests;
    }

    const history = useHistory();
    return (
        <div className="manageRequestStyle">
            <div className="container">
                <div className="leftContainer">
                    <h1 className="colTitle">Accepted Requests</h1>
                    {accpetedRequests()}
                </div>
                <div className="rightContainer">
                    <h1 className="colTitle">My Requests</h1>
                    {myRequests()}
                </div>
            </div>
        </div>
    )
}

export default ManageRequest
