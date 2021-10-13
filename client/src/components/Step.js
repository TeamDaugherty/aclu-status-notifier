
import React from "react";

class Step extends React.Component {

  render() {
    const {
      isActive,
      displayPrevious,
      displayNext,
      displaySubmit,
      component,
      children,
    } = this.props;

    if(isActive === false) return null;

    return (
      <React.Fragment>
        {component ? React.createElement(component) : children}
        <Previous
          isActive={displayPrevious}
          goToPreviousStep={() => this.props.goToPreviousStep()}
        />
        <Next
          isActive={displayNext}
          goToNextStep={() => this.props.goToNextStep()}
        />
        <Submit isActive={displaySubmit} />
      </React.Fragment>
    );
  }
}

class Next extends React.Component {

  render() {
    const { isActive } = this.props;
    if (isActive === false) return null;

    return (
      <button onClick={() => this.props.goToNextStep()}>
        Next
      </button>
    );
  }
}

class Previous extends React.Component {

  render() {
    const { isActive } = this.props;
    if (isActive === false) return null;

    return (
      <button onClick={() => this.props.goToPreviousStep()}>
        Previous
      </button>
    );
  }
}

class Submit extends React.Component {

  render() {
    const { isActive } = this.props;
    if (isActive === false) return null;

    return (
      <button type="submit">
        Submit
      </button>
    );

  }
}

export { Step };
