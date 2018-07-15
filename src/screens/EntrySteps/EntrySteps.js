import React, { Component } from 'react';
import { Feather } from '@expo/vector-icons';
import { Stepper, Title, Button } from '@components';
// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StepsActions } from '@redux/actions/Steps';
import { UserActions } from '@redux/actions/User';

import {
  ArrowLeftContainer,
  Container,
  DataContainer,
  DataInput,
} from './EntryStepsStyle';

class EntrySteps extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <ArrowLeftContainer
        onPress={() => navigation.navigate('Goal')}
        underlayColor="#444444"
      >
        <Feather name="arrow-left" size={20} />
      </ArrowLeftContainer >
    ),
  })

  state = {
    age: null,
    feet: null,
    inches: null,
    cm: null,
  }

  continuePressed = () => {
    const { data, currentStep } = this.props.steps;
    const dataSize = data.length;
    // handle save entry question answer

    if (currentStep === (dataSize - 1)) {
      // navigate to result
    } else {
      this.props.goToNext();
    }
  }

  render() {
    const { data, currentStep } = this.props.steps;
    console.log(data.length, currentStep);
    return (
      <Container>
        <Stepper steps={data.length} currentStep={(currentStep + 1)} />
        <DataContainer>
          <Title medium>{data[currentStep].title}</Title>
          <DataInput
            placeholder="Ex: 33"
            keyboardType="number-pad"
            value={this.state.age}
            maxLength={3}
            onChangeText={age => this.setState({ age })}
          />
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
