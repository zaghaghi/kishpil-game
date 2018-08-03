import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class TouchableRect extends Component {
    render() {
        return (
            <View style={[styles.full, {backgroundColor: this.props.color}]}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    full: {
        flex: 1,
        flexDirection: 'column',
        margin: 4,
    }
});
