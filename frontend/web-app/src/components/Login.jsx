import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useHistory } from "react-router-dom";
import api from '../api/api'

const LoginViewStyle = {
    height: "100vh",
    width: "100%",
    backgroundColor: "#E25353",
    color: "white",
    display: "flex"
}

const FormStyle = {
    margin: "auto",
    width: "40%"
}

function Login() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [failed, setFailed] = React.useState(false);
    const [token, setToken] = React.useState('');
    const history = useHistory();

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        var formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        api.login(formData).then(function(response) {
            setToken(response.token);
            history.push("/map");
        }).catch((error) => {
            setFailed(true);
            alert("Wrong login credentials! Try again.");   
        });
    }

    return (
        <div style={LoginViewStyle}>
            <Form style={FormStyle} onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!validateForm()}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Login;