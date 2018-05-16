import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 15,
        paddingVertical: 20,
    },
    text: {
        backgroundColor: 'transparent',
        color: '#fff',
        fontSize: 18,
        alignItems:'center',
    },
});

export default class GeneralButton extends Component {
    static propTypes = {
        onPress: PropTypes.func.isRequired,
        text: PropTypes.string.isRequired,
    }
    render() {
        return (
            <TouchableOpacity style={styles.container} activeOpacity={0,8
    } onPress = { this.props.onPress } >
        <LinearGradient
            colors={['#00CED1', '#AFEEEE']}
            locations={[0, 1]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.container}
        >
            <Text style={styles.text}>{this.props.text}</Text>
        </LinearGradient>
            </TouchableOpacity>
        )
    }
}