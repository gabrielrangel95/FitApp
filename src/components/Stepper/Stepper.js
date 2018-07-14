import React from 'react';
import PropTypes from 'prop-types';
import { StepperContainer, StepperItem } from './StepperStyle';

const Stepper = (props) => {
  const steps = [];
  // add the activy steps
  for (let i = 0; i < props.currentStep; i++) {
    steps.push(<StepperItem activy key={`activy${i}`} />);
  }
  // add the number of blank steps
  const blankSteps = props.steps - props.currentStep;
  for (let i = 0; i < blankSteps; i++) {
    steps.push(<StepperItem key={i} />);
  }
  return (
    <StepperContainer>
      {steps}
    </StepperContainer>
  );
};

Stepper.propTypes = {
  steps: PropTypes.number.isRequired,
  currentStep: PropTypes.number.isRequired,
};

export { Stepper };
