import React, { Component } from 'react'
import Stepper from '../Stepper'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export class AddComplaint extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
  e.preventDefault();
  this.props.prevStep();
};


  render() {
    const { values, handleChange } = this.props;

    return (
      <div className="container">
        <div className="complaintFrame column">
          <Stepper stepNumber={values.step}/>

          <p style={{fontSize: "1.8em"}}>Add Complaint to eStat</p>
          <p style={{fontWeight: "bold"}}>
            Complaint ID : {values.complaintID}
          </p>
        </div>
        <Form onSubmit={this.continue}>

          <h4>Email Address</h4>
          <Form.Group className="mb-3" controlId="formEmailAddress">
            <Form.Control type="text" placeholder="Email Address"
            value={values.emailAddress}
            onChange={handleChange('emailAddress')}
            />
          </Form.Group>
          <h4>Cell Phone Number</h4>
          <Form.Group className="mb-3" controlId="formPhoneNumber">
            <Form.Control type="text" placeholder="555-555-5555"
            value={values.phoneNumber}
            onChange={handleChange('phoneNumber')}/>
          </Form.Group>
          <h4>Complaint Status</h4>
          <Form.Group className="mb-3" controlId="formComplaintStatus">
            <Form.Control type="text" placeholder="Complaint Status"
            value={values.complaintStatus}
            onChange={handleChange('complaintStatus')}/>
          </Form.Group>

          <Button variant="primary" type="submit" className="submit-btn">
            Add Complaint to eStat
          </Button>
          <br/>
          <Button variant="secondary" onClick={this.back} className="btn">
            Back
          </Button>
        </Form>
      </div>
    );
  }
}
export default AddComplaint;
