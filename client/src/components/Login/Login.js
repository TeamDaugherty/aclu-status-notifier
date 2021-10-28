import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import LoginInfo from './LoginInfo.js'
import LoginForm from './LoginForm.js'


export default class Login extends Component {
  render() {
    return (
      <div className='rowC'>
        <LoginInfo />
        <LoginForm />
      </div>
    )
  }
}
