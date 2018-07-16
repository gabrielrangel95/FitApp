import { createStackNavigator } from 'react-navigation';
import { Goal, EntrySteps, Success } from '@screens';

const Router = createStackNavigator(
  {
    Goal: { screen: Goal },
    EntrySteps: { screen: EntrySteps },
    Success: { screen: Success },
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
