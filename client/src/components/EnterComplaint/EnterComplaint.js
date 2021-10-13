import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class EnterComplaint extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (

      <div className="container">
        <div className='complaintFrame' className="column">
          <p style={{fontSize: "1.8em"}}>Enter complaint ID</p>
          <p style={{fontWeight: "bold"}}>
            Enter the complaint number below:
          </p>
        </div>
        <Form>
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
