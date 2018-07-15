import { createStackNavigator } from 'react-navigation';
import { Goal, EntrySteps } from '@screens';

const Router = createStackNavigator(
  {
    Goal: { screen: Goal },
    EntrySteps: { screen: EntrySteps },
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'white',
      },
    },
  },
);

export { Router };
