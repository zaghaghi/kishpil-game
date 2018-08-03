
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import HomeScreen from './screens/home';

const App = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
});

export default App;
