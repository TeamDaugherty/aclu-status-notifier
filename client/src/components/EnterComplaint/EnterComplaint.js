import React, { Component } from 'react'
import { API } from 'aws-amplify';
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

    const submit = async (e) => {
      const apiName = 'sendEmailAPI'; // replace this with your api name.
      const path = '/sendEmail'; //replace this with the path you have configured on your API
      const myInit = {
        body: {"complaintId": "1"}, // replace this with attributes you need
        // headers: {'Access-Control-Allow-Origin' : '*',
        // 'Access-Control-Allow-Headers': '*'}, // OPTIONAL
      };


  console.log('Click happened');
    API.post(apiName, path, myInit)
       .then(response => {
         console.log("SEND")
       })
       .catch(error => {
         console.log(error.response);
       });
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
