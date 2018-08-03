import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import TouchableRect from '../components';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: '',
        header: null,
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.fullColumn}>
                <View style={styles.fullRow}>
                    <TouchableRect color='#0fa' text='P1'/>
                    <TouchableRect color='#af0' text='P2'/>
                </View>
                <View style={styles.fullRow}>
                    <TouchableRect color='#a0f' text='P3'/>
                    <TouchableRect color='#0af' text='P4'/>
                </View>
            </View>
        );
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
