import React, { Component } from 'react';
import { Animated, Easing, FlatList } from 'react-native';
import { Title, Card } from '@components';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { GoalActions } from '@redux/actions/Goal';

import {
  MainContainer,
  ContentContainer,
  SubTitle,
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
    this.props.navigation.navigate('EntrySteps');
  }

  keyExtractor = (item, index) => index;

  renderItem = ({ item }) => (
    <Card
      item={item}
      onGoalPress={this.onGoalPress}
    />
  );

  render() {
    const iconSize = 20;
    const { data } = this.props.goal;
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

            <FlatList
              data={data}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
            />
          </ContentContainer>
        </Animated.View>
      </MainContainer>
    );
  }
}

const mapStateToProps = state => ({
  goal: state.goal,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(GoalActions, dispatch);

const GoalConnect = connect(mapStateToProps, mapDispatchToProps)(Goal);
export { GoalConnect as Goal };
