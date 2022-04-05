import React, { Component } from 'react'
import Stepper from '../Stepper'
import Button from 'react-bootstrap/Button'
import steps from './steps'

export class AddComplaint extends Component {
  render() {
    const { values, nextStep, clearComplaintId } = this.props;

    const restart = async (e) => {
        e.preventDefault();
        clearComplaintId();
        nextStep(steps.enterComplaintId);           
    };

    return (
      <div className="container">
        <div className="complaintFrame column">
          <Stepper stepNumber={values.step}/>
          <h1>Success</h1>
          <p>
              The status of <span style={{fontWeight: "bold"}}>{values.complaintID}</span> has been updated.
          </p>
          <Button variant="primary" onClick={restart} className="submit-btn">
            Add/Update Another Complaint
          </Button>
      </div>
      </div>
    );
  }
}
export default AddComplaint;
