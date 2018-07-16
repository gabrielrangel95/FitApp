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
  ErrorText,
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
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    age: '',
    feet: '',
    inches: '',
    centimetres: '',
    errorMessage: null,
    continueBlocked: true,
    segmentItemSelected: 1, // 1 is FT 2 is CM
  }

  continuePressed = async () => {
    const { continueBlocked } = this.state;
    const { data, currentStep } = this.props.steps;
    if (continueBlocked) { // if is blocked will display an alert
      Alert.alert('You must input the data on the field for continue!');
    } else {
      const {
        age, feet, inches,
      } = this.state;
      let { centimetres } = this.state;
      const dataSize = data.length;
      // handle save entry question answer
      if (data[currentStep].id === 'age_question') { // verify witch step is the current
        await this.props.setUserAge(age); // save the data
      }

      if (data[currentStep].id === 'height_question') {
        if (centimetres.length === 0) {
          centimetres = ((feet * 30.48) + (inches * 2.54));
        }
        const height = {
          centimetres,
          feet,
          inches,
        };
        await this.props.setUserHeight(height); // save the height
      }

      if (currentStep === (dataSize - 1)) { // if is the last will navigate to the Success screen
        this.props.navigation.navigate('Success');
      } else {
        await this.setState({ continueBlocked: true });
        this.props.goToNextStep();
      }
    }
  }

  changeSegmentOption = async (segmentItemSelected) => {
    await this.setState({ segmentItemSelected }); // change the current segment (FT or CM)
    this.validateFields(); // will validate again
  }

  handleChangeText = async (text, type) => {
    // put the text on the state and will call the validation
    if (type === 'centimetres') {
      await this.setState({ centimetres: text });
    } else if (type === 'feet') {
      await this.setState({ feet: text });
    } else if (type === 'inches') {
      await this.setState({ inches: text });
    } else if (type === 'age') {
      await this.setState({ age: text });
    }
    this.validateFields();
  }

  validateFields = () => {
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
        if (age < 13 || age > 120) {
          this.setState({ errorMessage: 'You must have more then 13 years or less than 120' });
        } else {
          this.setState({ errorMessage: null });
        }
      }
    } else if (dataId === 'height_question') { // validate if is on the hight question
      if (this.state.segmentItemSelected === 1) {
        if (inches.length === 0 || feet.length === 0) { // inches and feet
          this.setState({ continueBlocked: true });
        } else {
          const convertedInCm = ((feet * 30.48) + (inches * 2.54));
          if (convertedInCm < 125 || convertedInCm > 301) {
            this.setState({ errorMessage: 'You must input a valid value' });
          } else {
            this.setState({ errorMessage: null });
          }
          this.setState({ continueBlocked: false });
        }
      } else if (this.state.segmentItemSelected === 2) { // centimetres
        if (centimetres.length === 0) {
          this.setState({ continueBlocked: true });
        } else {
          if (centimetres < 125 || centimetres > 301) {
            this.setState({ errorMessage: 'You must have more then 125cm or less than 301cm' });
          } else {
            this.setState({ errorMessage: null });
          }
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
            data[currentStep].id === 'age_question' && ( // display only the age entry
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
                <InputTypeText>Years</InputTypeText>
                {
                  this.state.errorMessage && <ErrorText>{this.state.errorMessage}</ErrorText>
                }
              </EntryContainer>
            )
          }
          {
            data[currentStep].id === 'height_question' && (
              <EntryContainer>
                {
                  this.state.segmentItemSelected === 1 ? (
                    // if FT is selected display feet and inches inputs
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
                  ) : ( // if is not, Cm input will be displayed
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
                { // display an error message if haves one
                  this.state.errorMessage && <ErrorText>{this.state.errorMessage}</ErrorText>
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
          <Button // will call on press if errorMessage is null
            blocked={this.state.continueBlocked || this.state.errorMessage}
            text="Continue"
            onPress={(this.state.errorMessage ? null : this.continuePressed)}
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
