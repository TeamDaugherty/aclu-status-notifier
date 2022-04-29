import React, { Component } from 'react'
import Stepper from '../Stepper'
import Button from 'react-bootstrap/Button'
import steps from './steps'
import { API, Auth } from 'aws-amplify';


export class AddComplaint extends Component {
  render() {
    const { values, nextStep, skipStep } = this.props;

    async function sendEmail() {
        const apiName = 'acluNotificationAPI';
        const path = '/sendEmail';
        console.log("sending email")
        const myInit = {
          body: {"complaintId": values.complaintID,
                "email": values.emailAddress,
                "complaintStatus": values.complaintStatus},
      };
      return await API.post(apiName, path, myInit);
    }


    const submit = e => {
        e.preventDefault();
        sendEmail();
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
          <div className="summaryContainerItem">
              <span style={{fontWeight: "bold"}}>Email Adress</span> : {values.emailAddress}
          </div>
          <div className="summaryContainerItem">
              <span style={{fontWeight: "bold"}}>Phone Number</span> : {values.phoneNumber}
          </div>
          <div className="summaryContainerItem">
              <span style={{fontWeight: "bold"}}>Status</span> : {values.complaintStatus}
          </div>
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
