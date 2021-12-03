import React, { Component } from 'react'
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
