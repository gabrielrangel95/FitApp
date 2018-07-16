import React, { Component } from 'react';
import { Animated, Easing, FlatList } from 'react-native';
import { Title, Card } from '@components';
import PropTypes from 'prop-types';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { GoalActions } from '@redux/actions/Goal';
import { UserActions } from '@redux/actions/User';

import {
  Styles,
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

  static propTypes = {
    setUserGoal: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    goal: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        subTitle: PropTypes.string,
        value: PropTypes.string,
      })),
    }).isRequired,
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

  onGoalPress = (item) => {
    this.props.setUserGoal(item);
    this.props.navigation.navigate('EntrySteps');
  }

  keyExtractor = item => item.value;

  renderItem = ({ item }) => (
    <Card
      item={item}
      onGoalPress={this.onGoalPress}
    />
  );

  render() {
    const { data } = this.props.goal;
    const beansImgAnimStyle = {
      left: this.backgroundImgsXPos,
    };
    const rightImagesAnimStyle = {
      right: this.backgroundImgsXPos,
    };
    const dataContainerAnimStyle = {
      opacity: this.dataContainerOpacity,
      transform: [{
        translateY: this.dataContainerYPos,
      }],
    };
    const logoImgAnimStyle = {
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
        <Animated.Image style={[Styles.beansImage, beansImgAnimStyle]} source={beansBackground} />
        <Animated.Image style={[Styles.matImage, rightImagesAnimStyle]} source={matBackground} />
        <Animated.Image style={[Styles.dumbbellImage, rightImagesAnimStyle]} source={dumbbellBackground} />
        <Animated.Image style={[Styles.logoImg, logoImgAnimStyle]} source={logo} />
        <Animated.View style={[Styles.dataContainer, dataContainerAnimStyle]}>
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

const mapDispatchToProps = (dispatch) => {
  const boundGoalCreators = bindActionCreators(GoalActions, dispatch);
  const boundUserCreators = bindActionCreators(UserActions, dispatch);
  const allActionProps = { ...boundGoalCreators, ...boundUserCreators, dispatch };
  return allActionProps;
};

const GoalConnect = connect(mapStateToProps, mapDispatchToProps)(Goal);
export { GoalConnect as Goal };
