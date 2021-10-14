import React from 'react';

class Stepper extends React.Component {
  render() {
    return(
      <div className = "stepper">
        <div>{[...Array(this.props.stepNumber)].map((e, i) => {
            return <div className = "rectangle-active" key={i}></div>
        })}
        </div>
        <div>{[...Array(4 - this.props.stepNumber)].map((e, i) => {
            return <div className = "rectangle-inactive" key={i}></div>
        })}
        </div>
      </div>
    );
  }
}



export default Stepper
