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

          <p style={{fontSize: "1.8em"}}>Send status update to complainant</p>
          <p style={{fontWeight: "bold"}}>
            Complaint ID : {values.complaintID}
          </p>
          <p style={{fontWeight: "bold"}}>
            Email Adress : {values.emailAddress}
          </p>
          <p style={{fontWeight: "bold"}}>
            Phone Number : {values.phoneNumber}
          </p>
          <p style={{fontWeight: "bold"}}>
            Status : {values.complaintStatus}
          </p>
        </div>

        <Button variant="primary" onClick={this.continue} className="submit-btn">
          Send Update
        </Button>
        <br/>
        <Button variant="secondary" onClick={this.back} className="btn">
          Back
        </Button>

      </div>
    );
  }
}
export default AddComplaint;
