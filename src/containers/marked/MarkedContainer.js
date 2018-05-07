import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class MarkedHomeScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            </View>
        );
    }
}

class MarkedDetailScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            </View>
        );
    }
}

export default MarkedContainer = StackNavigator({
    MarkedHome: { screen: MarkedHomeScreen },
    MarkedDetail: { screen: MarkedDetailScreen },
});