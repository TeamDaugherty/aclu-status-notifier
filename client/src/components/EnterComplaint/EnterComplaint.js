import React, { Component } from 'react'
import { API } from 'aws-amplify';
import { Auth } from 'aws-amplify';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Stepper from '../Stepper'
import { getComplaint } from '../../graphql/queries';
import steps from './steps'

export class EnterComplaint extends Component {
  constructor(props) {
      super(props)
      this.state = {
          errorMessage: undefined
      }
  }

  render() {
    const { values, handleChange, nextStep } = this.props;

    // const submit = async (e) => {
    //     e.preventDefault();
    //     console.log("values.complaintID", values.complaintID)
    //
    //     if (!values.complaintID) {
    //         return;
    //     }
    //
    //     try {
    //         const result = await API.graphql({ query: getComplaint, variables: { "id": values.complaintID } });
    //         const complaint = result.data.getComplaint;
    //
    //         if (complaint) {
    //             // TODO: set in values
    //         }
    //
    //         const nextStepNumber = complaint ? steps.updateComplaint : steps.createComplaint
    //         nextStep(nextStepNumber);
    //     } catch (error) {
    //         console.log("Error in submit: ", error)
    //         this.setState({ errorMessage: "Unable to submit"})
    //     }
    // };

    async function sendEmail() {
      const apiName = 'sendEmailNotificationAPI';
      const path = '/sendEmail';
      const myInit = {
        body: {"complaintId": "1"},
        headers: {
          Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`,
        },
    };
    return await API.post(apiName, path, myInit);
}

    const submit = (e) => {
      e.preventDefault();
      sendEmail();
    };



    return (
      <div className="container">
        <div className="complaintFrame column">
          <Stepper stepNumber={values.step}/>

          <p style={{fontSize: "1.8em"}}>Enter complaint ID</p>
          <p style={{fontWeight: "bold"}}>
            Enter the complaint number below:
          </p>
        </div>
        <Form onSubmit={submit}>
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
          { this.state.errorMessage && <div className="error-message">Error: {this.state.errorMessage}</div>}
        </Form>
      </div>
    );
  }
}
export default EnterComplaint;
