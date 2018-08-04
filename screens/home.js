import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import TouchableRect from '../components';
import Colors from '../components/colors';

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
                <StatusBar
                    backgroundColor="#E1E0E3"
                    barStyle="light-content"
                />
                <View style={styles.fullRow}>
                    <TouchableRect colors={[Colors[0]]} text='P1' revealAgain={false} onPress={this.playerTouch}/>
                    <TouchableRect colors={[Colors[1]]} text='P2' revealAgain={false} onPress={this.playerTouch}/>
                </View>
                <View style={styles.fullRow}>
                    <TouchableRect colors={[Colors[2]]} text='P3' revealAgain={false} onPress={this.playerTouch}/>
                    <TouchableRect colors={[Colors[3]]} text='P4' revealAgain={false} onPress={this.playerTouch}/>
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
                navigate('Start')
            }
        });
    }
}

const styles = StyleSheet.create({
    fullRow: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#E1E0E3'
    },
    fullColumn: {
        flex: 1,
        flexDirection: 'column',
        padding: 4,
        backgroundColor: '#E1E0E3'

    }
});
