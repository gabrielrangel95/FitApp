import React, { Component } from 'react';
import { Feather } from '@expo/vector-icons';
import { Stepper } from '@components';
import {
  ArrowLeftContainer,
  Container,
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


  render() {
    return (
      <Container>
        <Stepper steps={3} currentStep={1} />
      </Container>
    );
  }
}


export { Steps };