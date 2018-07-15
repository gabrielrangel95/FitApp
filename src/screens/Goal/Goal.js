import React, { Component } from 'react';
import { Animated, Easing, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {
  MainContainer,
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

  componentWillMount() {
    this.backgroundImgsXPos = new Animated.Value(-100);
    this.dataContainerOpacity = new Animated.Value(0);
    this.dataContainerYPos = new Animated.Value(100);
    this.logoImgYPos = new Animated.Value(300);
    this.logoScaleValue = new Animated.Value(2);
  }

  componentDidMount() {
    Animated.parallel([
      Animated.timing(this.logoImgYPos, {
        toValue: 0,
        duration: 750,
      }),
      Animated.timing(this.logoScaleValue, {
        toValue: 1,
        duration: 750,
      }),
      Animated.timing(this.backgroundImgsXPos, {
        toValue: 0,
        duration: 900,
        easing: Easing.linear,
      }),
      Animated.timing(this.dataContainerOpacity, {
        toValue: 1,
        duration: 1200,
      }),
      Animated.timing(this.dataContainerYPos, {
        toValue: 0,
        duration: 1200,
      }),
    ]).start();
  }

  onGoalPress = () => {
    this.props.navigation.navigate('Steps');
  }

  render() {
    const iconSize = 20;
    const beansImgAnimStyle = {
      height: '80%',
      width: '50%',
      position: 'absolute',
      top: '16%',
      left: this.backgroundImgsXPos,
    };
    const matImagAnimStyle = {
      height: '10%',
      width: '30%',
      position: 'absolute',
      right: this.backgroundImgsXPos,
      top: '80%',
    };
    const dumbbellImagAnimStyle = {
      height: '38%',
      width: '29%',
      position: 'absolute',
      right: this.backgroundImgsXPos,
      top: '50%',
    };
    const dataContainerAnimStyle = {
      flex: 1,
      width: '100%',
      opacity: this.dataContainerOpacity,
      transform: [{
        translateY: this.dataContainerYPos,
      }],
    };
    const logoImgAnimStyle = {
      width: 22,
      height: 44,
      marginBottom: 10,
      transform: [
        {
          translateY: this.logoImgYPos,
        },
        {
          scale: this.logoScaleValue,
        },
      ],
    };
    return (
      <MainContainer source={background}>
        <Animated.Image style={beansImgAnimStyle} source={beansBackground} />
        <Animated.Image style={matImagAnimStyle} source={matBackground} />
        <Animated.Image style={dumbbellImagAnimStyle} source={dumbbellBackground} />
        <Animated.Image style={logoImgAnimStyle} source={logo} />
        <Animated.View style={dataContainerAnimStyle}>
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
        </Animated.View>
      </MainContainer>
    );
  }
}

export { Goal };
