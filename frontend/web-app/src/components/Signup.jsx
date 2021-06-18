import React from 'react'
import Button from 'react-bootstrap/Button';
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

function Signup() {

    const [email, setEmail] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confPassword, setConfPassword] = React.useState('');
    const history = useHistory(); 

    function validateForm() {
        return (
            email.length > 0 && 
            password.length > 0 &&
            password === confPassword
        );
    }

    async function handleSubmit(event) {
        event.preventDefault();
        var formData = new FormData();
        formData.append('user_name', username);
        formData.append('user_email', email);
        formData.append('user_password', password);

        api.signup(formData).then(function(response) {
            console.log(response.data);
            history.push("/map");
        }).catch((error) => {
            store.addNotification({
                title: "Wrong credentials!",
                message: "Username/email already taken.",
                type: "warning",
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
                <h1 className="title">Create an account</h1>
            </div>
            
            <Form className="lformStyle" onSubmit={handleSubmit}>
                <Form.Group controlId="email">
                    <Form.Control style={input} type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="username">
                    <Form.Control style={input} type="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Control style={input} type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="confirmationPassword">
                    <Form.Control style={input} type="password" placeholder="Re-enter Password" value={confPassword} onChange={(e) => setConfPassword(e.target.value)}/>
                </Form.Group>
                <Button className="loginbtn" variant="primary" type="submit" disabled={!validateForm()}>
                    Sign Up
                </Button>
                <h1 className="signup"> Already have an account? </h1>
                <span className="signupLink" onClick={() => history.push('/')}>Login</span>
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

export default Signup;