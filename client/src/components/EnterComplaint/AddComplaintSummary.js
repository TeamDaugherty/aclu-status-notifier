import React, { Component } from 'react'
import Stepper from '../Stepper'
import Button from 'react-bootstrap/Button'
import steps from './steps'

export class AddComplaint extends Component {
  render() {
    const { values, nextStep, skipStep } = this.props;

    const submit = e => {
        e.preventDefault();
        nextStep(steps.success);
      };
    
    const skip = e => {
      e.preventDefault();
      skipStep();
    };

    return (
      <div className="container">
        <div className="complaintFrame column">
          <Stepper stepNumber={values.step}/>

          <p style={{fontSize: "1.8em"}}>Send status update to complainant</p>
          <p>
            <span style={{fontWeight: "bold"}}>Complaint ID</span> : {values.complaintID}
          </p>
          <p>
          <span style={{fontWeight: "bold"}}>Email Adress</span> : {values.emailAddress}
          </p>
          <p>
          <span style={{fontWeight: "bold"}}>Phone Number</span> : {values.phoneNumber}
          </p>
          <p>
          <span style={{fontWeight: "bold"}}>Status</span> : {values.complaintStatus}
          </p>
        </div>

        <Button variant="primary" onClick={submit} className="submit-btn">
          Send Update
        </Button>
        <br/>
        <Button variant="secondary" onClick={skip} className="secondary-btn">
          Not Now
        </Button>

      </div>
    );
  }
}
export default AddComplaint;
