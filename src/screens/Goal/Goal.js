import React, { Component } from 'react';
import { Feather } from '@expo/vector-icons';
import {
  MainContainer,
  BeansImage,
  DumbbellImage,
  MatImage,
  Logo,
  ContentContainer,
  SubTitle,
  CellContainer,
  CellSubTitle,
  IconContainer,
} from './GoalStyle';
import { Title } from '@components';

const background = require('../../assets/img/backgroundGrain.png');
const logo = require('../../assets/img/icon8Logo.png');
const beansBackground = require('../../assets/img/imgBeans.png');
const dumbbellBackground = require('../../assets/img/imgDumbbell.png');
const matBackground = require('../../assets/img/imgMat.png');

class Goal extends Component {
  static navigationOptions = {
    header: null,
  };

  onGoalPress = () => {
    this.props.navigation.navigate('Steps');
  }

  render() {
    const iconSize = 20;
    return (
      <MainContainer source={background}>
        <BeansImage source={beansBackground} />
        <MatImage source={matBackground} />
        <DumbbellImage source={dumbbellBackground} />
        <Logo source={logo} />
        <ContentContainer>
          <SubTitle>WELCOME TO 8FIT</SubTitle>
          <Title medium>What's your goal?</Title>

          <CellContainer onPress={this.onGoalPress}>
            <Title>Lose weight</Title>
            <CellSubTitle>Burn fat & get lean</CellSubTitle>
            <IconContainer>
              <Feather name="chevron-right" size={iconSize} color="grey" />
            </IconContainer>
          </CellContainer>

          <CellContainer>
            <Title>Get fitter</Title>
            <CellSubTitle>Tone up & feel healthy</CellSubTitle>
            <IconContainer>
              <Feather name="chevron-right" size={iconSize} color="grey" />
            </IconContainer>
          </CellContainer>
          
          <CellContainer>
            <Title>Gain muscle</Title>
            <CellSubTitle>Build mass & strength</CellSubTitle>
            <IconContainer>
              <Feather name="chevron-right" size={iconSize} color="grey" />
            </IconContainer>
          </CellContainer>
        </ContentContainer>
      </MainContainer>
    );
  }
}

export { Goal };
