import React from 'react';
import {
  MainContainer,
  Logo,
  Loader,
} from './LandingStyle';

const background = require('../../assets/img/backgroundGrain.png');
const logo = require('../../assets/img/icon8Logo.png');

const Landing = () => (
  <MainContainer source={background}>
    <Logo source={logo} />
    <Loader />
  </MainContainer>
);

export { Landing };
