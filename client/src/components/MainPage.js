import '../App.js'
import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Login from './Login/Login.js'
import ComplaintFlow from './ComplaintFlow.js'




class MainPage extends React.Component {
  render() {
    return (
      <div >
        <Login />
      </div>
    )
  }
}

export default MainPage
