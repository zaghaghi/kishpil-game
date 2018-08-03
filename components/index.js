import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class TouchableRect extends Component {
    state = {
        rerenders: 0
    }

    render() {
        const playerName = this.props.text;
        const color = this._randomColor(this.props.colors);
        return (
            <Animatable.View 
                ref={(ref) => this._view = ref}
                animation="zoomIn"
                duration={500}
                style={[styles.full, { backgroundColor: color }]}>
                <TouchableOpacity style={styles.touchable} onPress={() => {
                    if (!this.props.onPress) {
                        return;
                    }
                    this._view.zoomOut();
                    this.props.onPress(playerName, color);
                    if (this.props.revealAgain) {
                        setTimeout(() => {
                            this.setState({ rerenders: this.state.rerenders + 1 }, () => {
                                this._view.zoomIn();
                            })
                        }, Math.random() * 1000 + 500)
                    }
                }}>
                    <Text style={styles.text}>{playerName}</Text>
                </TouchableOpacity>
            </Animatable.View>
        );
    }

    _randomColor(colors) {
        return colors[parseInt(Math.random() * 100) % colors.length]
    }
}

const styles = StyleSheet.create({
    full: {
        flex: 1,
        flexDirection: 'column',
        margin: 4,
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
