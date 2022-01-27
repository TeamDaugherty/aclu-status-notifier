import React from 'react';
import StepDisplay from './StepDisplay'

class Stepper extends React.Component {
  render() {
    return(
      <div>
        <div className = "stepper">
          <div>{[...Array(this.props.stepNumber)].map((e, i) => {
              return <div className = "rectangle-active" key={i}></div>
          })}
          <br / >
          <StepDisplay stepNumber={this.props.stepNumber}/>
          </div>
          <div>{[...Array(5 - this.props.stepNumber)].map((e, i) => {
              return <div className = "rectangle-inactive" key={i}></div>
          })}
          </div>
        </div>

      </div>
    );
  }
}



export default Stepper
