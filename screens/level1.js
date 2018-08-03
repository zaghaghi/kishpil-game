import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import TouchableRect from '../components';
import Colors from '../components/colors';

export default class Level1Screen extends Component {
    static navigationOptions = {
        title: '',
        header: null,
    };

    scores = {}

    constructor(props) {
        super(props);
        for(color in Colors) {
            this.scores[Colors[color]] = 0;
        }

        setTimeout(() => {

        }, 30000)
    }

    render() {
        return (
            <View style={styles.fullColumn}>
                <View style={styles.fullRow}>
                    <TouchableRect colors={Colors} onPress={this.playerTouch} />
                    <TouchableRect colors={Colors} onPress={this.playerTouch} />
                </View>
                <View style={styles.fullRow}>
                    <TouchableRect colors={Colors} onPress={this.playerTouch} />
                    <TouchableRect colors={Colors} onPress={this.playerTouch} />
                </View>
            </View>
        );
    }

    playerTouch = (playerName, colorCode) => {
        const { navigate } = this.props.navigation;
        this.scores[colorCode]++;
        console.log(this.scores);
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
