
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import HomeScreen from './screens/home';
import Level1Screen from './screens/level1';
import Level2Screen from './screens/level2';
import ResultScreen from './screens/results';

const App = createSwitchNavigator({
  Home: {
    screen: HomeScreen
  },
  Level1: {
    screen: Level1Screen
  },
  Level2: {
    screen: Level2Screen
  },
  Results: {
    screen: ResultScreen
  }
});

export default App;
