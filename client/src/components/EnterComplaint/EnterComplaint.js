import React, { Component } from 'react'
import Stepper from '../Stepper'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class EnterComplaint extends Component {
  constructor(props) {
    super(props);
    this.state = {stepNumber: 1};


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log("hello")
    this.setState({stepNumber: this.state.stepNumber+1});
    event.preventDefault();
  }

  render() {
    return (

      <div className="container">
        <div className="complaintFrame column">
          <Stepper stepNumber={this.state.stepNumber}/>

          <p style={{fontSize: "1.8em"}}>Enter complaint ID</p>
          <p style={{fontWeight: "bold"}}>
            Enter the complaint number below:
          </p>
        </div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formComplaintID">
            <Form.Control type="text" placeholder="Complaint ID" />
          </Form.Group>
          <Button variant="primary" type="submit" className="submit-btn">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
