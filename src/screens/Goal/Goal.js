import React, { Component } from 'react';
import {
  MainContainer,
  BeansImage,
  DumbbellImage,
  MatImage,
  Logo,
} from './GoalStyle';

const background = require('../../assets/img/backgroundGrain.png');
const logo = require('../../assets/img/icon8Logo.png');
const beansBackground = require('../../assets/img/imgBeans.png');
const dumbbellBackground = require('../../assets/img/imgDumbbell.png');
const matBackground = require('../../assets/img/imgMat.png');

class Goal extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <MainContainer source={background}>
        <BeansImage source={beansBackground} />
        <MatImage source={matBackground} />
        <DumbbellImage source={dumbbellBackground} />
        <Logo source={logo} />
      </MainContainer>
    );
  }
}

export { Goal };
