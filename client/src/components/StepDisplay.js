import React from 'react';

class StepDisplay extends React.Component {

  renderSwitch(param) {
  switch(param) {
    case 1:
      return <div className="stepText">Enter</div>
    default:
      return <div className="stepText">Add</div>
    }
  }

  render() {
    return(
      <div className="stepDisplay">
        <div className="dot">{this.props.stepNumber}</div>
      </div>
    );
  }
}



export default StepDisplay
