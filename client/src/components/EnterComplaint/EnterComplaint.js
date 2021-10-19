import React, { Component } from 'react'
import Stepper from '../Stepper'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export class EnterComplaint extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <div className="container">
        <div className="complaintFrame column">
          <Stepper stepNumber={values.step}/>

          <p style={{fontSize: "1.8em"}}>Enter complaint ID</p>
          <p style={{fontWeight: "bold"}}>
            Enter the complaint number below:
          </p>
        </div>
        <Form onSubmit={this.continue}>
          <Form.Group className="mb-3" controlId="formComplaintID">
            <Form.Control
              type="text"
              placeholder="Complaint ID"
              value={values.complaintID}
              onChange={handleChange('complaintID')}
              />
          </Form.Group>
          <Button variant="primary" type="submit" className="submit-btn">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
export default EnterComplaint;
