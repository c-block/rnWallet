import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class DiscoveryHomeScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            </View>
        );
    }
}

class DiscoveryDetailScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            </View>
        );
    }
}

export default DiscoveryContainer = StackNavigator({
    DiscoveryHome: { screen: DiscoveryHomeScreen },
    DiscoveryDetail: { screen: DiscoveryDetailScreen },
});