import React from 'react'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import { useHistory } from "react-router-dom";
import api from '../api/api';
import '../css/Login.css'
import { store } from 'react-notifications-component';

const input = {
    display: "block",
    appearance: "none",
    outline: "0",
    border: "1px solid fade(white, 40%)",
    backgroundColor: "fade(white, 20%);",
    width: "250px",
    borderRadius: "3px",
    padding: "10px 15px",
    margin: "0 auto 10px auto",
    textAlign: "center",
    fontSize: "18px",
    color: "black",
    fontWeight: "300",
    
}

function Login() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [logginIn, setLogginIn] = React.useState(false);
    const history = useHistory();  

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        setLogginIn(true);
        event.preventDefault();
        var formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        api.login(formData).then(function(response) {
            //console.log(response.data.token);
            localStorage.setItem('token', response.data.auth_token);
            localStorage.setItem('streamToken', response.data.stream_token);
            localStorage.setItem('username', username);
            history.push("/map");
        }).catch((error) => {
            store.addNotification({
                title: "Wrong credentials!",
                message: "Wrong username or password!",
                type: "danger",
                insert: "top",
                container: "top-right",
                dismiss: {
                  duration: 5000,
                  onScreen: true
                }
            });   
        });
    }

    return (
        <div className="loginViewStyle">
            <div className="titleContainer">
                <h1 className="title">Assistly </h1>
            </div>
            
            <Form className="lformStyle" onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicUsername">
                    <Form.Control style={input}type="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control style={input}type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
                <Button className="loginbtn" variant="primary" type="submit" disabled={!validateForm()}>
                    Login
                </Button>
            
                <h1 className="signup"> New User? </h1>
                <span className="signupLink" onClick={() => history.push('/signup')}>Sign Up</span>

                {logginIn ? <Spinner animation="border" variant="light"/> : ""}
            </Form>
            
            <ul class="bg-bubbles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}

export default Login;