import React, { Component } from 'react';
import { Stepper, Title, Button, Segment, BackButton } from '@components';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';
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
  InputTypeText,
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
    setUserAge: PropTypes.func.isRequired,
    setUserHeight: PropTypes.func.isRequired,
  };

  state = {
    age: '',
    feet: '',
    inches: '',
    centimetres: '',
    continueBlocked: true,
    segmentItemSelected: 1, // 1 is FT 2 is CM
  }

  continuePressed = async () => {
    const { continueBlocked } = this.state;
    const { data, currentStep } = this.props.steps;
    if (continueBlocked) {
      Alert.alert('You must input the data on the field for continue!');
    } else {
      const {
        age, centimetres, feet, inches,
      } = this.state;
      const dataSize = data.length;
      // handle save entry question answer
      if (data[currentStep].id === 'age_question') {
        await this.props.setUserAge(age);
      }

      if (data[currentStep].id === 'height_question') {
        const height = {
          centimetres,
          feet,
          inches,
        };
        await this.props.setUserHeight(height);
      }

      if (currentStep === (dataSize - 1)) {
        // navigate to result
      } else {
        await this.setState({ continueBlocked: true });
        this.props.goToNextStep();
      }
    }
  }

  changeSegmentOption = async (segmentItemSelected) => {
    await this.setState({ segmentItemSelected });
    this.validateContinueBlock();
  }

  handleChangeText = (text, type) => {
    if (type === 'centimetres') {
      this.setState({ centimetres: text });
    } else if (type === 'feet') {
      this.setState({ feet: text });
    } else if (type === 'inches') {
      this.setState({ inches: text });
    } else if (type === 'age') {
      this.setState({ age: text });
    }
    this.validateContinueBlock();
  }

  validateContinueBlock = () => {
    const {
      age, inches, feet, centimetres,
    } = this.state;
    const { data, currentStep } = this.props.steps;
    const dataId = data[currentStep].id;

    if (dataId === 'age_question') { // validate if is on the age question
      if (age.length === 0) {
        this.setState({ continueBlocked: true });
      } else {
        this.setState({ continueBlocked: false });
      }
    } else if (dataId === 'height_question') { // validate if is on the hight question
      if (this.state.segmentItemSelected === 1) {
        if (inches.length === 0 || feet.length === 0) {
          this.setState({ continueBlocked: true });
        } else {
          this.setState({ continueBlocked: false });
        }
      } else if (this.state.segmentItemSelected === 2) {
        if (centimetres.length === 0) {
          this.setState({ continueBlocked: true });
        } else {
          this.setState({ continueBlocked: false });
        }
      }
    }
  }

  render() {
    const { data, currentStep } = this.props.steps;
    return (
      <Container>
        <Stepper steps={data.length} currentStep={(currentStep + 1)} />
        <DataContainer behavior="padding">
          <Title medium>{data[currentStep].title}</Title>
          {
            data[currentStep].id === 'age_question' && (
              <EntryContainer>
                <DataInput
                  full
                  keyboardType="number-pad"
                  value={this.state.age}
                  maxLength={3}
                  onChangeText={age => this.handleChangeText(age, 'age')}
                  borderBottomColor="grey"
                  borderBottomWidth={1}
                  borderStyle="solid"
                  underlineColorAndroid="transparent"
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
                        flex1
                        keyboardType="number-pad"
                        value={this.state.feet}
                        maxLength={2}
                        onChangeText={feet => this.handleChangeText(feet, 'feet')}
                        borderBottomColor="grey"
                        borderBottomWidth={1}
                        borderStyle="solid"
                        underlineColorAndroid="transparent"
                      />
                      <InputTypeText smallItem>Ft</InputTypeText>
                      <DataInput
                        flex1
                        keyboardType="number-pad"
                        value={this.state.inches}
                        maxLength={2}
                        onChangeText={inches => this.handleChangeText(inches, 'inches')}
                        borderBottomColor="grey"
                        borderBottomWidth={1}
                        borderStyle="solid"
                        underlineColorAndroid="transparent"
                      />
                      <InputTypeText smallItem>In</InputTypeText>
                    </InputContainer>
                  ) : (
                    <InputContainer>
                      <DataInput
                        full
                        keyboardType="number-pad"
                        value={this.state.centimetres}
                        maxLength={3}
                        onChangeText={centimetres => this.handleChangeText(centimetres, 'centimetres')}
                        borderBottomColor="grey"
                        borderBottomWidth={1}
                        borderStyle="solid"
                        underlineColorAndroid="transparent"
                      />
                      <InputTypeText>Cm</InputTypeText>
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
          <Button
            blocked={this.state.continueBlocked}
            text="Continue"
            onPress={this.continuePressed}
          />
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
