import React from 'react'
import Sidebar from '../components/Sidebar.jsx'
import Chat from '../components/Chat.jsx'
import { useHistory, useParams } from 'react-router-dom';
import '../css/Chat.css'
import api from '../api/api.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import Rating from 'react-simple-star-rating'
import { store } from 'react-notifications-component';

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
    const [rating, setRating] = React.useState(0);
    
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

    function handleRatingAcceptor(rate) {
        console.log(rate);
        var formData = new FormData();
        formData.append('scored_id', task[0].fields.acceptor_id);
        formData.append('score', rate);
        if(rate > 0) {
            api.giveRating(formData, localStorage.getItem('token')).then(function(response) {
                store.addNotification({
                    title: "Rating added",
                    message: "Succesfully rated a user!",
                    type: "success",
                    insert: "top",
                    container: "top-right",
                    dismiss: {
                      duration: 5000,
                      onScreen: true
                    }
                });
                setRating(rate);
            }).catch(function(error) {
                alert('Something went wrong');
            });
        }
    }

    function handleRatingRequestor(rate) {
        console.log(rate);
        var formData = new FormData();
        formData.append('scored_id', task[0].fields.requestor_id);
        formData.append('score', rating);
        if(rate > 0) {
            api.giveRating(formData, localStorage.getItem('token')).then(function(response) {
                store.addNotification({
                    title: "Rating added",
                    message: "Succesfully rated a user!",
                    type: "success",
                    insert: "top",
                    container: "top-right",
                    dismiss: {
                      duration: 5000,
                      onScreen: true
                    }
                }).catch(function(error) {
                    alert('Something went wrong');
                });
                setRating(rate);
            });
        }
    }

    return (
        <div style={CreateRequestViewStyle}>
            <Sidebar/>
            <div className="containerChatStyle">
                <div  className="chatStyle">
                    <Chat id={id}/>
                </div>
                <div className="rightContainerStyle">
                    {requestor_user != null && acceptor_user != null && acceptor_user.username === localStorage.getItem('username') &&
                        <div className="ratingContainer">
                            <FontAwesomeIcon icon={faUser} size="8x" />
                            <h2 className="textStyle">Request made by {requestor_user.username}</h2>
                            <Rating
                                onClick={handleRatingRequestor}
                                ratingValue={rating}
                                size={50}
                                transition
                                fillColor='orange'
                                emptyColor='gray'
                            />
                            <h2>Give a rating!</h2>  
                        </div>}


                    {requestor_user != null && acceptor_user != null && requestor_user.username === localStorage.getItem('username') &&
                    <div className="ratingContainer">
                        <FontAwesomeIcon icon={faUser} size="8x" />
                        <h1 className="textStyle">Your request has been accepted by {acceptor_user.username}</h1>
                        <Rating
                            onClick={handleRatingAcceptor}
                            ratingValue={rating}
                            size={50}
                            transition
                            fillColor='orange'
                            emptyColor='gray'
                        />
                        <h1>Give a rating!</h1> 
                    </div>}


                    {acceptor_user != null && acceptor_user.username === localStorage.getItem('username') && <button className="button" onClick={() => cancel(id)}>End request</button>}
                    
                    {!(acceptor_user == null) && <button className="button grey">Task accepted</button>}
                    
                    {acceptor_user == null && <button className="button" onClick={() => cancel(id)}>Cancel Request</button>}
                </div>
            </div>
        </div>
    )
}

export default ChatView;