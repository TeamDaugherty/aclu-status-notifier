import '../App.js';
import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function handleSubmit() {
      
}

class RightPane extends React.Component {

    render() {
      return (
        <div className="mainRight">
          <div className="loginFrame">
            <h3>Sign In</h3>
            <p>Sign in to eStat by entering your email address and password below. 
              If this is your first time logging into eStat after verifying your 
              email address, use the Forgot Password process to update your password.</p>
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoFocus
                type="email"
                value="myemail"
                //onChange={}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value="notthis"
                //onChange={}
              />
            </Form.Group>
        <Button block size="lg" type="submit" >
          Login
        </Button>
      </Form>
        </div>
      );
    }
  }

  export default RightPane