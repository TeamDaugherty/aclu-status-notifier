import React from 'react';

class StepDisplay extends React.Component {

  renderSwitch(param) {
    switch (param.stepNumber) {
      case 1:
        return <div className="stepText">Enter</div>
      case 2:
        return <div className="stepText">Add</div>
      case 3:
        return <div className="stepText">Send Update</div>
      case 4:
        return <div className="stepText">Success</div>
      default:
        return <div className="stepText">Add</div>
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
