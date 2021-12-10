import React, { Component } from 'react'
import { AmplifySignOut } from '@aws-amplify/ui-react'
import MainPage from './components/MainPage'
import Login from './components/Login/Login';
import './App.css'
import { Button } from 'react-bootstrap';

export default class App extends Component {
  state = { user: undefined };

  setUser = (user) => {
    // store in cookie?
    // get on page load
    this.setState({ user: user });
  }

  signout = () => {
    // clear cookie?
    this.setState({ user: undefined });
  }

  render() {
    const { user } = this.state;

    return (
      <div className='App'>
        <header className='App-header'>
          <div className='header-title'>ACLU</div>
          <div className='header-action'>
            { user && <Button variant="secondary" onClick={this.signout} className={`secondary-btn header-btn`}>Sign Out</Button>}
          </div>
        </header>
        <div >
          { user && <MainPage/>}    
          { !user && <Login setUser={this.setUser} />}
        </div>
      </div>
    )
  }
}
