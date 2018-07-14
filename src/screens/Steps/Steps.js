import React, { Component } from 'react';
import { Feather } from '@expo/vector-icons';
import { Stepper, Title, Button } from '@components';
import {
  ArrowLeftContainer,
  Container,
  DataContainer,
  DataInput,
} from './StepsStyle';


class Steps extends Component {
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
    age: 22,
  }

  render() {
    return (
      <Container>
        <Stepper steps={2} currentStep={1} />
        <DataContainer>
          <Title medium>How old are you?</Title>
          <DataInput
            placeholder="Ex: 33"
            keyboardType="number-pad"
            value={this.state.age}
            maxLength={3}
            onChangeText={age => this.setState({ age })}
          />
          <Button text="Continue" />
        </DataContainer>
      </Container>
    );
  }
}


export { Steps };