import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import classes from './AuthForm.module.css';
import { Alert } from 'react-bootstrap';

export class AuthForm extends Component {
  submit = e => {
    e.preventDefault();
    this.props.signIn();
  };

  render() {
    const { values, handleChange, errorMessage } = this.props;

    return (
    <section className={classes.auth}>

      <p>Sign in to eStat by entering your email address and password below.
        If this is your first time logging into eStat after verifying your
        email address, use the Forgot Password process to update your
        password.
      </p>
        <Form onSubmit={this.submit}>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email Address"
              value={values.emailAddress}
              onChange={handleChange('emailAddress')}
              />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange('password')}
              />
          </Form.Group>
          <Button variant="primary" type="submit" className="submit-btn">
            Sign In
          </Button>
        </Form>
        { errorMessage && <div className="error-message">Error: {errorMessage}</div>}
    </section>
    );
  }
}
export default AuthForm;
