import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
    return (
        <div style={LoginViewStyle}>
            <Form style={FormStyle}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Login;