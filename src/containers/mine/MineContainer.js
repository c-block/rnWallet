import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class MineHomeScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            </View>
        );
    }
}

class MineDetailScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            </View>
        );
    }
}

export default MineContainer = StackNavigator({
    MineHome: { screen: MineHomeScreen },
    MineDetail: { screen: MineDetailScreen },
});