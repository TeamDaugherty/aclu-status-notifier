import React from 'react';
import steps from './EnterComplaint/steps'

class StepDisplay extends React.Component {

  renderSwitch(param, isUpdate) {
    switch (param.stepNumber) {
      case steps.enterComplaintId:
        return <div className="stepText">Enter</div>
      case steps.createComplaint:
        return <div className="stepText">{isUpdate ? 'Update' : 'Add'}</div>   
      case steps.summary:
        return <div className="stepText">Send Update</div>
      case steps.success:
        return <div className="stepText">Success</div>
      default:
        return <div className="stepText">Enter</div>
      }
  }

  render() {
    const { stepNumber, isUpdate } = this.props;

    return(
      <div className="stepDisplay">
        <div className="dot">{stepNumber}</div>
        <div> {this.renderSwitch({stepNumber}, isUpdate)} </div>
      </div>
    );
  }
}



export default StepDisplay
