import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Font } from 'expo';
import store from './src/redux/store';
import { Router } from './src/router';
import { Landing } from './src/screens';

class App extends Component {
  state = {
    loading: true,
  }

  componentDidMount() {
    console.disableYellowBox = true;
    this.loadFonts();
  }

  loadFonts = async () => {
    await Font.loadAsync({
      firaSansBold: require('./src/assets/fonts/FiraSans-Bold.ttf'),
      firaSansMedium: require('./src/assets/fonts/FiraSans-Medium.ttf'),
      fireSansRegular: require('./src/assets/fonts/FiraSans-Regular.ttf'),
    });
    this.setState({ loading: false });
  }

  render() {
    const { loading } = this.state;
    return (
      <Provider store={store}>
        {
          loading ? <Landing />
          : <Router />
        }
      </Provider>
    );
  }
}

export default App;
