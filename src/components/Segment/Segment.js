import React from 'react';
import PropTypes from 'prop-types';
import { SegmentContainer, SegmentOption, SegmentText } from './SegmentStyle';

const Segment = props => (
  <SegmentContainer>
    <SegmentOption
      left
      selected={props.selectedOption === 1}
      onPress={() => props.changeSegmentOption(1)}
    >
      <SegmentText selected={props.selectedOption === 1}>{props.firstOption}</SegmentText>
    </SegmentOption>
    <SegmentOption
      right
      selected={props.selectedOption === 2}
      onPress={() => props.changeSegmentOption(2)}
    >
      <SegmentText selected={props.selectedOption === 2}>{props.secondOption}</SegmentText>
    </SegmentOption>
  </SegmentContainer>
);

Segment.propTypes = {
  selectedOption: PropTypes.number.isRequired,
  firstOption: PropTypes.string.isRequired,
  secondOption: PropTypes.string.isRequired,
  changeSegmentOption: PropTypes.func.isRequired,
};

export { Segment };
