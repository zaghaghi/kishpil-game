import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import TouchableRect from '../components';
import Colors from '../components/colors';

export default class LevelScreen extends Component {
    static navigationOptions = {
        title: '',
        header: null,
    };

    scores = {};

    constructor(props) {
        super(props);
        const { navigation } = this.props;
        this.scores = navigation.getParam('scores', {});
        if (this.props.initScores) {
            for (color in Colors) {
                this.scores[Colors[color]] = 0;
            }
        }

        setTimeout(() => {
            const { navigate } = this.props.navigation;
            navigate(this.props.nextScreen, { scores: this.scores });
        }, this.props.duration)
    }

    render() {
        return (
            <View style={styles.fullColumn}>
                <StatusBar
                    backgroundColor="#E1E0E3"
                    barStyle="light-content"
                />
                {this.renderRows()}
            </View>
        );
    }

    renderRows = () => {
        rows = []
        for (let i = 0; i < this.props.rows; i++) {
            rows.push(
                <View key={'row_' + i} style={styles.fullRow}>
                    {this.renderCols(i)}
                </View>
            );            
        }
        return rows;
    }

    renderCols = (r) => {
        cols = []
        for (let i = 0; i < this.props.cols; i++) {
            cols.push(
                <TouchableRect key={'row_' + r + '_col_' + i} colors={Colors} revealAgain={true} onPress={this.playerTouch} />
            );
        }
        return cols;
    }

    playerTouch = (playerName, colorCode) => {
        this.scores[colorCode]++;
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
