import { createStackNavigator } from 'react-navigation';
import { Goal, Steps } from '@screens';

const Router = createStackNavigator({
  Goal: { screen: Goal },
  Steps: { screen: Steps },
});

export { Router };
