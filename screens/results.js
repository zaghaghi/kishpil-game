import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, TouchableOpacity, Text } from 'react-native';
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

    constructor(props) {
        super(props);
    }

    render() {
        const { navigation } = this.props;
        const scores = navigation.getParam('scores', {});
        let max = -1;
        for (color in scores) {
            if (scores[color] > max) {
                max = scores[color];
            }
        }
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
                        winner={scores[Colors[0]] == max}
                        text={scores[Colors[0]]}
                    />
                    <TouchableRect 
                        colors={[Colors[1]]}
                        score={scores[Colors[1]]}
                        winner={scores[Colors[1]] == max}
                        text={scores[Colors[1]]}
                    />
                </View>
                <View style={styles.fullRow}>
                    <TouchableRect 
                        colors={[Colors[2]]}
                        score={scores[Colors[2]]}
                        winner={scores[Colors[2]] == max}
                        text={scores[Colors[2]]}
                    />
                    <TouchableRect 
                        colors={[Colors[3]]}
                        score={scores[Colors[3]]}
                        winner={scores[Colors[3]] == max}
                        text={scores[Colors[3]]}
                    />
                </View>
                <View style={styles.fullOverlay}>
                <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.touchable}
                    onPress={() => {
                        const { navigate } = this.props.navigation;
                        navigate('Home');
                    }}>
                        <Text style={styles.text}>BACK</Text>
                    </TouchableOpacity>
                </View>
                </View>
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

    },
    fullOverlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        width: 200,
        height: 100,
        backgroundColor: '#E1E0E3',
        padding: 6,
    },
    button: {
        flex: 1,
        backgroundColor: '#D9ABFF'
    },
    touchable: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#fff',
    }
});
