import React, { Component } from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import HomeScreen from './screens/home';
import LevelScreen from './screens/level';
import ResultScreen from './screens/results';

const App = createSwitchNavigator({
  Home: {
    screen: HomeScreen
  },
  Start: {
    screen: (props) => <LevelScreen {...props} rows={2} cols={2} duration={3000} initScores={true} nextScreen='Level2' />,
  },
  Level2: {
    screen: (props) => <LevelScreen {...props} rows={4} cols={3} duration={5000} nextScreen='Level3' />,
  },
  Level3: {
    screen: (props) => <LevelScreen {...props} rows={6} cols={4} duration={7000} nextScreen='Level4' />,
  },
  Level4: {
    screen: (props) => <LevelScreen {...props} rows={7} cols={5} duration={12000} nextScreen='Results' />,
  },
  Results: {
    screen: ResultScreen
  }
});

export default App;
