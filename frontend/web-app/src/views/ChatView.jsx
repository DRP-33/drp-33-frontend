import React from 'react'
import Sidebar from '../components/Sidebar.jsx'
import Chat from '../components/Chat.jsx'
import { useHistory, useParams } from 'react-router-dom';
import '../css/Chat.css'
import api from '../api/api.js'

const CreateRequestViewStyle = {
    height: "100vh",
    width: "100%"
}

function ChatView() {
    const {id} = useParams();
    const history = useHistory();

    function cancel(id) {
        var formData = new FormData();
        formData.append('task_id', id);
        api.cancelTask(formData, localStorage.getItem('token')).then(function(response) {
            history.push("/map");
        }).catch((error) => {
            alert("Something went wrong");   
        });
    }

    return (
        <div style={CreateRequestViewStyle}>
            <Sidebar/>
            <div className="containerChatStyle">
                <div  className="chatStyle">
                    <Chat id={id}/>
                </div>
                <div className="rightContainerStyle">
                    <button className="button" onClick={() => cancel(id)}>Cancel Request</button>
                </div>
            </div>
        </div>
    )
}

export default ChatView;