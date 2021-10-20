import React, { Component } from 'react';
import EnterComplaint from './EnterComplaint/EnterComplaint.js'
import AddComplaint from './EnterComplaint/AddComplaint.js'
import AddComplaintSummary from './EnterComplaint/AddComplaintSummary.js'
import Success from './EnterComplaint/Success.js'

import EnterComplaintInfo from './EnterComplaint/EnterComplaintInfo.js'



export class ComplaintFlow extends React.Component {
  state = {
    step: 1,
    complaintID: '',
    emailAddress:'',
    phoneNumber:'',
    complaintStatus:'',
    dateAdded:'',
    dateUpdated:'',

  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };


  render() {
  const { step } = this.state;
  const { complaintID, emailAddress, phoneNumber, complaintStatus } = this.state;
  const values = { step, complaintID, emailAddress, phoneNumber, complaintStatus };

  switch (step) {
    case 1:
      return (
        <div className='split-screen'>
          <div className='half-screen'>
            <EnterComplaintInfo/>
          </div>
          <div className='half-screen'>
            <EnterComplaint
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          </div>
        </div>
      );
    case 2:
    return (
      <div className='split-screen'>
        <div className='half-screen'>
          <EnterComplaintInfo/>
        </div>
        <div className='half-screen'>
          <AddComplaint
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        </div>
      </div>
    );
    case 3:
    return (
      <div className='split-screen'>
        <div className='half-screen'>
          <EnterComplaintInfo/>
        </div>
        <div className='half-screen'>
          <AddComplaintSummary
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        </div>
      </div>
    );
    case 4:
    return (
      <div className='split-screen'>
        <div className='half-screen'>
          <EnterComplaintInfo/>
        </div>
        <div className='half-screen'>
          <Success
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        </div>
      </div>
    );
    default:
      (console.log('This is a multi-step form built with React.'))
  }
}
}

export default ComplaintFlow ;
