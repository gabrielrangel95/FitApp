import React, { Component } from 'react';
import { Stepper, Title, Button, Segment, BackButton } from '@components';
import PropTypes from 'prop-types';
// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StepsActions } from '@redux/actions/Steps';
import { UserActions } from '@redux/actions/User';

import {
  Container,
  DataContainer,
  EntryContainer,
  DataInput,
  InputContainer,
} from './EntryStepsStyle';

class EntrySteps extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: <BackButton navigation={navigation} />,
  })

  static propTypes = {
    steps: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
      })),
      currentStep: PropTypes.number,
    }).isRequired,
    goToNextStep: PropTypes.func.isRequired,
  }

  state = {
    age: null,
    feet: null,
    inches: null,
    cm: null,
    segmentItemSelected: 1, // 1 is FT 2 is CM
  }

  continuePressed = () => {
    const { data, currentStep } = this.props.steps;
    const dataSize = data.length;
    // handle save entry question answer

    if (currentStep === (dataSize - 1)) {
      // navigate to result
    } else {
      this.props.goToNextStep();
    }
  }

  changeSegmentOption = (segmentItemSelected) => {
    this.setState({ segmentItemSelected });
  }

  render() {
    const { data, currentStep } = this.props.steps;
    return (
      <Container>
        <Stepper steps={data.length} currentStep={(currentStep + 1)} />
        <DataContainer>
          <Title medium>{data[currentStep].title}</Title>
          {
            data[currentStep].id === 'age_question' && (
              <EntryContainer>
                <DataInput
                  placeholder="Ex: 33"
                  keyboardType="number-pad"
                  value={this.state.age}
                  maxLength={3}
                  onChangeText={age => this.setState({ age })}
                />
              </EntryContainer>
            )
          }
          {
            data[currentStep].id === 'height_question' && (
              <EntryContainer>

                {
                  this.state.segmentItemSelected === 1 ? (
                    <InputContainer>
                      <DataInput
                        placeholder="Ex: 130"
                        keyboardType="number-pad"
                        value={this.state.feet}
                        maxLength={3}
                        onChangeText={feet => this.setState({ feet })}
                      />
                      <DataInput
                        placeholder="Ex: 130"
                        keyboardType="number-pad"
                        value={this.state.inches}
                        maxLength={3}
                        onChangeText={inches => this.setState({ inches })}
                      />
                    </InputContainer>
                  ) : (
                    <InputContainer>
                      <DataInput
                        placeholder="Ex: 130"
                        keyboardType="number-pad"
                        value={this.state.cm}
                        maxLength={3}
                        onChangeText={cm => this.setState({ cm })}
                      />
                    </InputContainer>
                  )
                }

                <Segment
                  selectedOption={this.state.segmentItemSelected}
                  firstOption="FT"
                  secondOption="CM"
                  changeSegmentOption={this.changeSegmentOption}
                />
              </EntryContainer>
            )
          }
          <Button text="Continue" onPress={this.continuePressed} />
        </DataContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  steps: state.steps,
});

const mapDispatchToProps = (dispatch) => {
  const boundStepsCreators = bindActionCreators(StepsActions, dispatch);
  const boundUserCreators = bindActionCreators(UserActions, dispatch);
  const allActionProps = { ...boundStepsCreators, ...boundUserCreators, dispatch };
  return allActionProps;
};

const EntryStepsConnect = connect(mapStateToProps, mapDispatchToProps)(EntrySteps);
export { EntryStepsConnect as EntrySteps };
