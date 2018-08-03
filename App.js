
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import HomeScreen from './screens/home';
import Level1Screen from './screens/level1';

const App = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Level1: {
    screen: Level1Screen
  }
});

export default App;
