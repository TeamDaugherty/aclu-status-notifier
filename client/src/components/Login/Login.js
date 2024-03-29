import React, { Component } from 'react'
import { Auth } from 'aws-amplify';
import LoginInfo from './LoginInfo.js'
import LoginForm from './LoginForm.js'

export default class Login extends Component {
  state = {
    emailAddress: '',
    password: '',
    errorMessage: undefined
  };

  signIn = async () => {
    const { emailAddress, password } = this.state;
    try {
        this.setState({ errorMessage: undefined });
        const user = await Auth.signIn(emailAddress, password ? password : " ");
        console.log('Authenticated: ', user)
        this.props.setUser(user);
    } catch (error) {
        console.log('error signing in', error.message);
        this.setState({ errorMessage: error.message });
    }
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
  const { emailAddress, password, errorMessage } = this.state;
  const values = { emailAddress, password, errorMessage };

    return (
      <div className='rowC'>
        <LoginInfo />
        <LoginForm 
          signIn={this.signIn} 
          handleChange={this.handleChange} 
          values={values} 
          errorMessage={this.state.errorMessage}
        />
      </div>
    )
  }
}
