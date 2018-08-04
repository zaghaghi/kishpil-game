import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import TouchableRect from '../components';
import Colors from '../components/colors';

export default class Level2Screen extends Component {
    static navigationOptions = {
        title: '',
        header: null,
    };

    scores = {}
    
    constructor(props) {
        super(props);
        for (color in Colors) {
            this.scores[Colors[color]] = 0;
        }
        
        const { navigation } = this.props;
        this.scores = navigation.getParam('scores', {});
        
        setTimeout(() => {
            const { navigate } = this.props.navigation;
            navigate('Results', { scores: this.scores });
        }, 5000)
    }

    render() {
        return (
            <View style={styles.fullColumn}>
                <StatusBar
                    backgroundColor="#E1E0E3"
                    barStyle="light-content"
                />
                <View style={styles.fullRow}>
                    <TouchableRect colors={Colors} revealAgain={true} onPress={this.playerTouch} />
                    <TouchableRect colors={Colors} revealAgain={true} onPress={this.playerTouch} />
                    <TouchableRect colors={Colors} revealAgain={true} onPress={this.playerTouch} />
                </View>
                <View style={styles.fullRow}>
                    <TouchableRect colors={Colors} revealAgain={true} onPress={this.playerTouch} />
                    <TouchableRect colors={Colors} revealAgain={true} onPress={this.playerTouch} />
                    <TouchableRect colors={Colors} revealAgain={true} onPress={this.playerTouch} />
                </View>
                <View style={styles.fullRow}>
                    <TouchableRect colors={Colors} revealAgain={true} onPress={this.playerTouch} />
                    <TouchableRect colors={Colors} revealAgain={true} onPress={this.playerTouch} />
                    <TouchableRect colors={Colors} revealAgain={true} onPress={this.playerTouch} />
                </View>
                <View style={styles.fullRow}>
                    <TouchableRect colors={Colors} revealAgain={true} onPress={this.playerTouch} />
                    <TouchableRect colors={Colors} revealAgain={true} onPress={this.playerTouch} />
                    <TouchableRect colors={Colors} revealAgain={true} onPress={this.playerTouch} />
                </View>
            </View>
        );
    }

    playerTouch = (playerName, colorCode) => {
        this.scores[colorCode]++;
        console.log(this.scores);
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
