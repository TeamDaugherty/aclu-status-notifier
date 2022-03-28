import React from 'react';
import EnterComplaint from './EnterComplaint/EnterComplaint.js'
import ComplaintData from './EnterComplaint/ComplaintData.js'
import AddComplaintSummary from './EnterComplaint/AddComplaintSummary.js'
import Success from './EnterComplaint/Success.js'
import EnterComplaintInfo from './EnterComplaint/EnterComplaintInfo.js'
import steps from './EnterComplaint/steps'

export class ComplaintFlow extends React.Component {
  state = {
    step: steps.enterComplaintId,
    isUpdate: false,
    complaintID: '',
    emailAddress:'',
    phoneNumber:'',
    complaintStatus:'',
    dateAdded:'',
    dateUpdated:'',
  };

  // Proceed to next step
  nextStep = (nextStep) => {
    const { step } = this.state;

    this.setState({
      step: nextStep ? nextStep : step + 1
    });
  };

  // Go back to prev step
  prevStep = (previousStep) => {
    const { step } = this.state;
    this.setState({
      step: previousStep ? previousStep : step - 1
    });
  };

  setComplaint = (complaint) => {
    if (complaint) {
        const { emailAddress, complaintStatus } = complaint
        console.log('complaintFlow: ', complaint)
        this.setState({
            isUpdate: true,
            emailAddress,
            // TODO: phoneNumber,
            complaintStatus
        });
    }
  }

  clearComplaint = () => {
    this.setState({
        isUpdate: false,
        emailAddress: '',
        // TODO: phoneNumber: '',
        complaintStatus: ''
    });
  }

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
  const { step } = this.state;
  const { complaintID, emailAddress, phoneNumber, complaintStatus, isUpdate } = this.state;
  const values = { step, complaintID, emailAddress, phoneNumber, complaintStatus, isUpdate };

  switch (step) {
    case steps.enterComplaintId:
      return (
        <div className='split-screen'>
          <div className='half-screen'>
            <EnterComplaintInfo/>
          </div>
          <div className='half-screen'>
            <EnterComplaint
              nextStep={this.nextStep}
              setComplaint={this.setComplaint}
              clearComplaint={this.clearComplaint}
              handleChange={this.handleChange}
              values={values}
            />
          </div>
        </div>
      );
    case steps.createComplaint:
    return (
      <div className='split-screen'>
        <div className='half-screen'>
          <EnterComplaintInfo/>
        </div>
        <div className='half-screen'>
          <ComplaintData
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        </div>
      </div>
    );    
    case steps.summary:
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
    case steps.success:
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
