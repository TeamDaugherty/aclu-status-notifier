import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import MainPage from './components/MainPage'
import Login from './components/Login/Login';
import './App.css'

export default class App extends Component {
  state = { user: undefined };

  constructor() {
    super()
    const user = localStorage.getItem('user')
    if (user) {
      this.state = { user }
    }
  }

  setUser = (user) => {
    this.setState({ user: user });
    localStorage.setItem( 'user', user );
  }

  signout = () => {
    this.setState({ user: undefined });
    localStorage.removeItem('user')
  }

  render() {
    const { user } = this.state;

    return (
      <div className='App'>
        <header className='App-header'>
          <div className='header-title'>ACLU E-STAT</div>
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
