import '../App.js'
import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Login from './Login.js'

// function handleSubmit() {}

class RightPane extends React.Component {
  render() {
    return (
      <div className='mainRight'>
        <Login />
      </div>
    )
  }
}

export default RightPane
