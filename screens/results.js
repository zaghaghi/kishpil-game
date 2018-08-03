import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import TouchableRect from '../components';
import Colors from '../components/colors';

export default class ResultScreen extends Component {
    static navigationOptions = {
        title: '',
        header: null,
    };

    state = {
        startedPlayers: {}
    }

    render() {
        const { navigation } = this.props;
        const scores = navigation.getParam('scores', {});
        return (
            <View style={styles.fullColumn}>
                <StatusBar
                    backgroundColor="#E1E0E3"
                    barStyle="light-content"
                />
                <View style={styles.fullRow}>
                    <TouchableRect 
                        colors={[Colors[0]]}
                        score={scores[Colors[0]]}
                        text={scores[Colors[0]]}
                    />
                    <TouchableRect 
                        colors={[Colors[1]]}
                        score={scores[Colors[1]]}
                        text={scores[Colors[1]]}
                    />
                </View>
                <View style={styles.fullRow}>
                    <TouchableRect 
                        colors={[Colors[2]]}
                        score={scores[Colors[2]]}
                        text={scores[Colors[2]]}
                    />
                    <TouchableRect 
                        colors={[Colors[3]]}
                        score={scores[Colors[3]]}
                        text={scores[Colors[3]]}
                    />
                </View>
            </View>
        );
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
