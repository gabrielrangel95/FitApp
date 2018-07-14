import React from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer, ButtonText } from './ButtonStyle';

const Button = props => (
  <ButtonContainer {...props}>
    <ButtonText>{props.text}</ButtonText>
  </ButtonContainer>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export { Button };
