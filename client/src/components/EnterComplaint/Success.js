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
          <h1>Success</h1>
      </div>
      </div>
    );
  }
}
export default AddComplaint;
