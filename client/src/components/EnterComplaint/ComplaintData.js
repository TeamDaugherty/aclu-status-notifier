import React, { Component } from 'react'
import Stepper from '../Stepper'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import steps from './steps'
import statuses  from './Statuses'
import { updateComplaintCall, createComplaintCall } from 'clients/apiClient'

export class ComplaintData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            errorMessage: undefined
        }
    }

  render() {
    const { values, handleChange, nextStep, prevStep } = this.props;
    const { isUpdate, step, complaintID, emailAddress, phoneNumber, complaintStatus } = values

    const submit = async (e) => {
        e.preventDefault();
        try {
            if (isUpdate) {
                await updateComplaintCall(values)
            } else {
                await createComplaintCall(values)
            }
            nextStep(steps.summary);           
        } catch (error) {
            console.log("Error in submit: ", error)
            this.setState({ errorMessage: "Unable to submit"})
        }
    };

    const back = e => {
      e.preventDefault();
      prevStep();
    };

    const actionName = isUpdate ? 'Update Complaint in eStat' : 'Add Complaint to eStat'

    return (
      <div className="container">
        <div className="complaintFrame column">
          <Stepper stepNumber={step} isUpdate={isUpdate}/>

          <p style={{fontSize: "1.8em"}}>{actionName}</p>
          <p style={{fontWeight: "bold"}}>
            Complaint ID : {complaintID}
          </p>
        </div>
        <Form onSubmit={submit}>

          <h4>Email Address:</h4>
          { isUpdate ? emailAddress : 
            <Form.Group className="mb-3" controlId="formEmailAddress">
              <Form.Control type="text" placeholder="Email Address"
              required
              value={emailAddress}
              onChange={handleChange('emailAddress')}
              />
            </Form.Group>
          }
          <h4>Cell Phone Number:</h4>
          { isUpdate ? phoneNumber : 
            <Form.Group className="mb-3" controlId="formPhoneNumber">
              <Form.Control type="text" placeholder="555-555-5555"
              value={phoneNumber}
              onChange={handleChange('phoneNumber')}/>
            </Form.Group>
          }
          <h4>Complaint Status:</h4>
          <Form.Group className="mb-3" controlId="formComplaintStatus">
            <Form.Control
              required
              className="dropdown-input"
              as="select" 
              value={complaintStatus}
              onChange={handleChange('complaintStatus')}
            >
                <option value="">Please select a status</option>
                {statuses.map((status) => {
                    return (<option value={status}>{status}</option>)
                })}
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit" className="submit-btn">
            {actionName}
          </Button>
          <br/>
          <Button variant="secondary" onClick={back} className="secondary-btn">
            Back
          </Button>
        </Form>
        { this.state.errorMessage && <div className="error-message">Error: {this.state.errorMessage}</div>}
      </div>
    );
  }
}
export default ComplaintData;
