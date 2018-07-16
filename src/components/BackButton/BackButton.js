import React from 'react';
import { Feather } from '@expo/vector-icons';
import PropTypes from 'prop-types';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StepsActions } from '@redux/actions/Steps';
import { ArrowLeftContainer } from './BackButtonStyle';

const BackButton = props => (
  <ArrowLeftContainer onPress={() => (props.steps.currentStep === 0 ? props.navigation.goBack()
  : props.goToBackStep())}
  >
    <Feather name="arrow-left" size={20} />
  </ArrowLeftContainer>
);

BackButton.propTypes = {
  steps: PropTypes.shape({
    currentStep: PropTypes.number,
  }).isRequired,
  goToBackStep: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = state => ({
  steps: state.steps,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(StepsActions, dispatch);


const BackButtonConnect = connect(mapStateToProps, mapDispatchToProps)(BackButton);
export { BackButtonConnect as BackButton };
