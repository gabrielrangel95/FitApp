import React, { Component } from 'react';
import { Feather } from '@expo/vector-icons';
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

      </Container>
    );
  }
}


export { Steps };