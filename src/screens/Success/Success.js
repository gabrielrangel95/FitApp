import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Navigation
import { StackActions, NavigationActions } from 'react-navigation';
// redux
import { connect } from 'react-redux';
// ui
import { Animated, Easing } from 'react-native';
import { Title, Button } from '@components';
import {
  Styles,
  Container,
  ItemsContainer,
  DescriptionText,
  DataRowContainer,
} from './SuccessStyle';

const background = require('../../assets/img/backgroundGrain.png');
const logo = require('../../assets/img/icon8Logo.png');
const parsleyBackground = require('../../assets/img/imgParsley.png');

class Success extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
    user: PropTypes.shape({
      goal: PropTypes.shape({
        title: PropTypes.string,
        subTitle: PropTypes.string,
        value: PropTypes.string,
      }),
      age: PropTypes.string,
      height: PropTypes.shape({
        centimetres: PropTypes.string,
        feet: PropTypes.string,
        inches: PropTypes.string,
      }),
    }).isRequired,
  };

  componentWillMount() {
    this.logoImgYPos = new Animated.Value(300);
    this.dataContainerOpacity = new Animated.Value(0);
    this.buttonContainerOpacity = new Animated.Value(0);
    this.backgroundImgsXPos = new Animated.Value(-100);
  }

  componentDidMount() {
    Animated.parallel([
      Animated.timing(this.logoImgYPos, {
        toValue: 0,
        duration: 500,
      }),
      Animated.timing(this.backgroundImgsXPos, {
        toValue: 0,
        duration: 900,
        easing: Easing.linear,
      }),
      Animated.timing(this.dataContainerOpacity, {
        toValue: 1,
        duration: 1000,
      }),
      Animated.timing(this.buttonContainerOpacity, {
        toValue: 1,
        duration: 1500,
      }),
    ]).start();
  }

  navigateToGoal = () => { // not allow the user come back
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Goal' })],
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    const { goal, age, height } = this.props.user;
    const logoImgAnimStyle = {
      transform: [
        {
          translateY: this.logoImgYPos,
        },
      ],
    };
    const rightImagesAnimStyle = {
      right: this.backgroundImgsXPos,
    };
    const dataContainerAnimStyle = {
      opacity: this.dataContainerOpacity,
    };
    const buttonContainerAnimStyle = {
      opacity: this.buttonContainerOpacity,
    };
    return (
      <Container source={background}>
        <Animated.Image style={[Styles.imgParsley, rightImagesAnimStyle]} source={parsleyBackground} />
        <ItemsContainer>
          <Animated.Image style={[Styles.logoImg, logoImgAnimStyle]} source={logo} />
          <Animated.View style={[Styles.dataContainer, dataContainerAnimStyle]}>
            <Title medium>All Ready!</Title>
            <Title>We have done a personalized training plan for you!</Title>
            <DataRowContainer>
              <DescriptionText>Goal: </DescriptionText>
              <DescriptionText>{goal.title}</DescriptionText>
            </DataRowContainer>
            <DataRowContainer>
              <DescriptionText>Age: </DescriptionText>
              <DescriptionText>{age} years</DescriptionText>
            </DataRowContainer>
            <DataRowContainer>
              <DescriptionText>Height: </DescriptionText>
              {
                (height.feet && height.inches) ? (
                  <DescriptionText>
                    {height.feet} Ft {height.inches} In
                  </DescriptionText>
                ) : (
                  <DescriptionText>
                    {height.centimetres} Cm
                  </DescriptionText>
                )
              }
            </DataRowContainer>
          </Animated.View>
          <Animated.View style={buttonContainerAnimStyle}>
            <Button text="Done" onPress={() => this.navigateToGoal()} />
          </Animated.View>
        </ItemsContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const SuccessConnect = connect(mapStateToProps, null)(Success);
export { SuccessConnect as Success };
