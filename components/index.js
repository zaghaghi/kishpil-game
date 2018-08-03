import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class TouchableRect extends Component {
    render() {
        return (
            <View style={[styles.full, {backgroundColor: this.props.color}]}>
                <Text style={styles.text}>{this.props.text}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    full: {
        flex: 1,
        flexDirection: 'column',
        margin: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#fff',
    }
});
