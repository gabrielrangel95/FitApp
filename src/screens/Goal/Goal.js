import React, { Component } from 'react';
import {
  MainContainer,
  Logo,
} from './GoalStyle';

const background = require('../../assets/img/backgroundGrain.png');
const logo = require('../../assets/img/icon8Logo.png');

class Goal extends Component {
  render() {
    return (
      <MainContainer source={background}>
        <Logo source={logo} />
      </MainContainer>
    );
  }
}

export { Goal };
