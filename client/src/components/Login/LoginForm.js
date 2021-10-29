import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class LoginForm extends Component {
  render() {
    return (
      <div className = 'mainRight'>
        <div className='loginFrame'>
          <h3>Sign In</h3>
          <p>
            Sign in to eStat by entering your email address and password below.
            If this is your first time logging into eStat after verifying your
            email address, use the Forgot Password process to update your
            password.
          </p>
        </div>
        <Form>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label='Check me out' />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}
