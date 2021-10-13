import React from "react";
import EnterComplaint from './EnterComplaint/EnterComplaint.js'
import EnterComplaintInfo from './EnterComplaint/EnterComplaintInfo.js'



class ComplaintFlow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 0,
      totalSteps:  4,
    };
  }

  goToPreviousStep = () => {
    this.setState({ currentStep: this.state.currentStep - 1 });
  };

  goToNextStep = () => {
    this.setState({ currentStep: this.state.currentStep + 1 });
  };

  render() {
    return (
      <div className='split-screen'>
        <div className='half-screen'>
          <EnterComplaintInfo/>
        </div>
        <div className='half-screen'>
          <EnterComplaint />
        </div>
      </div>
    )
  }
}

export default ComplaintFlow ;
