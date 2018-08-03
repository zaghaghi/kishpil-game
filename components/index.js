import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class TouchableRect extends Component {
    render() {
        const playerName = this.props.text;
        return (
            <Animatable.View ref={(ref) => this._view = ref} style={[styles.full, {backgroundColor: this.props.color}]}>
                <TouchableHighlight style={styles.touchable} onPress={() => {
                this._view.zoomOut();
                    this.props.onPress(playerName);
            }}>
                    <Text style={styles.text}>{playerName}</Text>
                </TouchableHighlight>
            </Animatable.View>
        );
    }
}

const styles = StyleSheet.create({
    full: {
        flex: 1,
        flexDirection: 'column',
        margin: 4,
    },
    touchable: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#fff',
    }
});
