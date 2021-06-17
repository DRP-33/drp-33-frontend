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
    let {id} = useParams();
    let history = useHistory();
    let [task, setTask] = React.useState([]);
    let [acceptor_user, setAcceptorUser] = React.useState(null);
    let [requestor_user, setRequestorUser] = React.useState(null);
    
    
    React.useEffect(() => {
        var formData = new FormData();
        formData.append('task_id', id); 
        api.getOneTask(formData, localStorage.getItem('token')).then(function(response) {
            setTask(response.data);
        })
        .catch((error) => {
            alert("Something went wrong");   
        });
    }, []);

    React.useEffect(() => {
        var formData2 = new FormData();

        if(task.length === 0) return;

        formData2.append('user_id', task[0].fields.acceptor_id);
        if(task[0].fields.acceptor_id !== null) {
            api.getUser(formData2, localStorage.getItem('token')).then(function(response) {
                setAcceptorUser(response.data);
            }).catch((error) => {
                alert("Something went wrong");   
            });
        }

        var formData3 = new FormData();
        formData3.append('user_id', task[0].fields.requestor_id);

        api.getUser(formData3, localStorage.getItem('token')).then(function(response) {
            setRequestorUser(response.data);
        }).catch((error) => {
            alert("Something went wrong");   
        });
    }, [task]);


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
                    {!(acceptor_user == null) && <button className="button grey">Task accepted</button>}
                    {acceptor_user != null && acceptor_user.username == localStorage.getItem('username') && <button className="button" onClick={() => cancel(id)}>End request</button>}
                    {acceptor_user == null && <button className="button" onClick={() => cancel(id)}>Cancel Request</button>}
                </div>
            </div>
        </div>
    )
}

export default ChatView;