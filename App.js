
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { createStackNavigator, createSwitchNavigator } from 'react-navigation';


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: '',
    header: null,
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.fullColumn}>
        <View style={styles.fullRow}>
          <View style={[styles.fullColumn, { backgroundColor: '#0fa'}]}>
          </View>
          <View style={[styles.fullColumn, { backgroundColor: '#af0'}]}>
          </View>
        </View>
        <View style={styles.fullRow}>
          <View style={[styles.fullColumn, { backgroundColor: '#a0f' }]}>
          </View>
          <View style={[styles.fullColumn, { backgroundColor: '#0af' }]}>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fullRow: {
    flex: 1,
    flexDirection: 'row'
  },
  fullColumn: {
    flex:1,
    flexDirection: 'column'
  }
});

const App = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
});

export default App;
