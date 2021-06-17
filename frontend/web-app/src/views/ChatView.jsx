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
    const [task, setTask] = React.useState(0);
    var formData = new FormData();
    
    
    React.useEffect(() => {
        formData.append('task_id', id); 
        api.getOneTask(formData, localStorage.getItem('token')).then(function(response) {
            setTask(response.data);
        }).catch((error) => {
            alert("Something went wrong");   
        });
    }, []);
    
    console.log(task);

    function cancel(id) {
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