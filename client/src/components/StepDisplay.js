import React from 'react';
import steps from './EnterComplaint/steps'

class StepDisplay extends React.Component {

  renderSwitch(param) {
    switch (param.stepNumber) {
      case steps.enterComplaintId:
        return <div className="stepText">Enter</div>
      case steps.createComplaint:
        return <div className="stepText">Add</div>
      case steps.updateComplaint:
        return <div className="stepText">Update</div>        
      case steps.summary:
        return <div className="stepText">Send Update</div>
      case steps.success:
        return <div className="stepText">Success</div>
      default:
        return <div className="stepText">Enter</div>
      }
  }

  render() {
    const { stepNumber } = this.props;

    return(
      <div className="stepDisplay">
        <div className="dot">{stepNumber}</div>
        <div> {this.renderSwitch({stepNumber})} </div>
      </div>
    );
  }
}



export default StepDisplay
