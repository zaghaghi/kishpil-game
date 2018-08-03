import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
var Sound = require('react-native-sound');
Sound.setCategory('Playback');

Animatable.initializeRegistryWithDefinitions({
    pulse: {
        0: {
            scale: 1,
        },
        0.5: {
            scale: 3,
        },
        1: {
            scale: 1,
        },
    }
});

export default class TouchableRect extends Component {
    state = {
        rerenders: 0
    }
    revealTimer = null;
    blockTouch = false;
    beep = new Sound(require('../assets/sounds/beep.mp3'), (error) => {
        if (error) {
            console.log('failed to load the sound', error);
            return;
        }
        // loaded successfully
        console.log('loaded successfully');
        //console.log('duration in seconds: ' + beep.getDuration() + 'number of channels: ' + beep.getNumberOfChannels());
    });

    componentWillUnmount() {
        if (this.revealTimer) {
            clearTimeout(this.revealTimer);
            this.revealTimer = null;
        }
    }
    render() {
        const playerName = this.props.text;
        const color = this._randomColor(this.props.colors);
        if (this.props.revealAgain) {
            this.revealTimer = setTimeout(() => {
                if (!this.revealTimer) {
                    return;
                }
                this.blockTouch = true;
                this._view.zoomOut();
                setTimeout(() => {
                    this.setState({ rerenders: this.state.rerenders + 1 }, () => {
                        this._view.zoomIn();
                        this.blockTouch = false;
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
                    if (this.blockTouch) {
                        return;
                    }
                    if (!this.props.onPress) {
                        return;
                    }
                    console.log("Rect Clicked");
                    this.blockTouch = true;
                    this._view.zoomOut();
                    this.props.onPress(playerName, color);
                    this.beep.stop(() => {
                        this.beep.play();
                    });
                    if (this.props.revealAgain) {
                        if (this.revealTimer) {
                            clearTimeout(this.revealTimer);
                            this.revealTimer = null;
                        }
                        setTimeout(() => {
                            this.setState({ rerenders: this.state.rerenders + 1 }, () => {
                                this._view.zoomIn();
                                this.blockTouch = false;
                            })
                        }, Math.random() * 1000 + 500)
                    }
                }}>
                    <Animatable.Text 
                        style={styles.text}
                        animation={this.props.winner ? 'pulse' : null}
                        iterationCount='infinite'
                    >{playerName}</Animatable.Text>
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
