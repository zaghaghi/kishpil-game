import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class TouchableRect extends Component {
    state = {
        rerenders: 0
    }
    revealTimer = null;

    render() {
        const playerName = this.props.text;
        const color = this._randomColor(this.props.colors);
        if (this.props.revealAgain) {
            this.revealTimer = setTimeout(() => {
                this._view.zoomOut();
                setTimeout(() => {
                    this.setState({ rerenders: this.state.rerenders + 1 }, () => {
                        this._view.zoomIn();
                    })
                }, Math.random() * 1000 + 500)
            }, Math.random() * 1000 + 1500);
        }
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
                        if (this.revealTimer) {
                            clearTimeout(this.revealTimer);
                        }
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
