import React, { Component } from 'react';
import PropTypes from 'prop-types';

// redux
import { connect } from 'react-redux';

// ui
import { Animated, Easing } from 'react-native';
import { Title } from '@components';
import {
  Styles,
  Container,
  DescriptionText,
  DataRowContainer,
  DataContainer,
} from './SuccessStyle';

const background = require('../../assets/img/backgroundGrain.png');
const logo = require('../../assets/img/icon8Logo.png');

class Success extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    user: PropTypes.shape({
      goal: PropTypes.string,
      age: PropTypes.string,
      height: PropTypes.string,
    }).isRequired,
  };

  componentWillMount() {
    this.logoImgYPos = new Animated.Value(300);
  }

  componentDidMount() {
    Animated.parallel([
      Animated.timing(this.logoImgYPos, {
        toValue: 0,
        duration: 750,
      }),
    ]).start();
  }

  navigateToGoal = () => {
    this.props.navigation.navigate('Goal');
  }

  render() {
    const { goal, age, height } = this.props.user;
    const logoImgAnimStyle = {
      width: 22,
      height: 44,
      marginTop: 48,
      marginBottom: 24,
      transform: [
        {
          translateY: this.logoImgYPos,
        },
      ],
    };
    return (
      <Container source={background}>
        <Animated.Image style={logoImgAnimStyle} source={logo} />
        <Animated.View style={Styles.dataContainer}>
          <Title medium>All Ready!</Title>
          <Title>We have done a personalized training plan for you!</Title>
          <DataRowContainer>
            <Title>Goal: </Title>
            <DescriptionText>{goal.title}</DescriptionText>
          </DataRowContainer>
          <DataRowContainer>
            <Title>Age: </Title>
            <DescriptionText>{age} years</DescriptionText>
          </DataRowContainer>
          <DataRowContainer>
            <Title>Height: </Title>
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
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const SuccessConnect = connect(mapStateToProps, null)(Success);
export { SuccessConnect as Success };
