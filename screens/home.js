import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import TouchableRect from '../components';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: '',
        header: null,
    };

    state = {
        startedPlayers: {}
    }

    render() {
        return (
            <View style={styles.fullColumn}>
                <View style={styles.fullRow}>
                    <TouchableRect color='#0fa' text='P1' onPress={this.playerTouch}/>
                    <TouchableRect color='#af0' text='P2' onPress={this.playerTouch}/>
                </View>
                <View style={styles.fullRow}>
                    <TouchableRect color='#a0f' text='P3' onPress={this.playerTouch}/>
                    <TouchableRect color='#0af' text='P4' onPress={this.playerTouch}/>
                </View>
            </View>
        );
    }

    playerTouch = (playerName) => {
        const { navigate } = this.props.navigation;
        startedPlayers = this.state.startedPlayers;
        startedPlayers[playerName] = 1;
        this.setState({ startedPlayers }, () => {
            items = Object.keys(this.state.startedPlayers).length;
            if (items == 4) {
                navigate('Home2')
            }
        });
    }
}

const styles = StyleSheet.create({
    fullRow: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#000'
    },
    fullColumn: {
        flex: 1,
        flexDirection: 'column',
        padding: 4,
        backgroundColor: '#000'

    }
});
