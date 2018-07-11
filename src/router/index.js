import { createStackNavigator } from 'react-navigation';
import { Goal } from '@screens';

const Router = createStackNavigator({
  Goal: { screen: Goal },
});

export { Router };
