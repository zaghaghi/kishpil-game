import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

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
                    <View style={[styles.fullColumn, { backgroundColor: '#0fa' }]}>
                    </View>
                    <View style={[styles.fullColumn, { backgroundColor: '#af0' }]}>
                    </View>
                </View>
                <View style={styles.fullRow}>
                    <View style={[styles.fullColumn, { backgroundColor: '#a0f' }]}>
                    </View>
                    <View style={[styles.fullColumn, { backgroundColor: '#0af' }]}>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    fullRow: {
        flex: 1,
        flexDirection: 'row'
    },
    fullColumn: {
        flex: 1,
        flexDirection: 'column'
    }
});
