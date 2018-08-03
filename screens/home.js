import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
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
                <View style={styles.fullRow}>
                    <TouchableRect colors={[Colors[0]]} text='P1' onPress={this.playerTouch}/>
                    <TouchableRect colors={[Colors[1]]} text='P2' onPress={this.playerTouch}/>
                </View>
                <View style={styles.fullRow}>
                    <TouchableRect colors={[Colors[2]]} text='P3' onPress={this.playerTouch}/>
                    <TouchableRect colors={[Colors[3]]} text='P4' onPress={this.playerTouch}/>
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
                navigate('Level1')
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
