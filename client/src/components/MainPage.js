import '../App.js'
import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Login from './Login.js'
import ComplaintFlow from './ComplaintFlow.js'




class MainPage extends React.Component {
  render() {
    return (
      <div >
        <ComplaintFlow />
      </div>
    )
  }
}

export default MainPage