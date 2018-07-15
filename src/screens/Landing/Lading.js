import React, { Component } from 'react';
import { Font } from 'expo';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StepsActions } from '@redux/actions/Steps';
import { GoalActions } from '@redux/actions/Goal';
import { Router } from '@router';
import {
  MainContainer,
  Logo,
  Loader,
} from './LandingStyle';

const background = require('../../assets/img/backgroundGrain.png');
const logo = require('../../assets/img/icon8Logo.png');

class Landing extends Component {
  static propTypes = {
    getGoalRequest: PropTypes.func.isRequired,
    getStepsRequest: PropTypes.func.isRequired,
    goals: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      subTitle: PropTypes.string,
      value: PropTypes.string,
    })).isRequired,
    steps: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    })).isRequired,
  }

  state = {
    loading: true,
  }

  async componentDidMount() {
    await this.loadFonts(); // will load the fonts tha will be used on the app
    await this.props.getGoalRequest(); // will load the goals options
    await this.props.getStepsRequest(); // will load the steps questions
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  loadFonts = async () => {
    await Font.loadAsync({
      firaSansBold: require('../../assets/fonts/FiraSans-Bold.ttf'),
      firaSansMedium: require('../../assets/fonts/FiraSans-Medium.ttf'),
      fireSansRegular: require('../../assets/fonts/FiraSans-Regular.ttf'),
    });
    this.setState({ loading: false });
  }


  render() { // while don't load the fonts and datas, will return de loader
    if (this.state.loading || this.props.goals.lenght === 0 || this.props.steps.lenght === 0) {
      return (
        <MainContainer source={background}>
          <Logo source={logo} />
          <Loader />
        </MainContainer>
      );
    }
    return ( // when ready, will return the router
      <Router />
    );
  }
}

const mapStateToProps = state => ({
  goals: state.goal.data,
  steps: state.steps.data,
});

const mapDispatchToProps = (dispatch) => {
  const boundGoalCreators = bindActionCreators(GoalActions, dispatch);
  const boundStepsCreators = bindActionCreators(StepsActions, dispatch);
  const allActionProps = { ...boundGoalCreators, ...boundStepsCreators, dispatch };
  return allActionProps;
};

const LandingConnect = connect(mapStateToProps, mapDispatchToProps)(Landing);
export { LandingConnect as Landing };
