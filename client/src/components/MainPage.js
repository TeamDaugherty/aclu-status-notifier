import '../App.js'
import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Login from './Login.js'
import ComplaintFlow from './ComplaintFlow.js'




class RightPane extends React.Component {
  render() {
    return (
      <div className>
        <ComplaintFlow />
      </div>
    )
  }
}

export default RightPane
