import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AssetsContainer from './assets/AssetsContainer'
import DiscoveryContainer from './discovery/DiscoveryContainer'
import MarkedContainer from './marked/MarkedContainer'
import MineContainer from './mine/MineContainer'

export default class HomeTab extends Component {
    render() {
        return <Tab />;
    }
}

const TabRouteConfigs = {
    Assets: { screen: AssetsContainer },
    Discovery: { screen: DiscoveryContainer },
    Marked: { screen: MarkedContainer },
    Mine: { screen: MineContainer },
}

const TabNavigatorConfig = {
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            switch (routeName) {
                case 'Assets':
                    iconName = `ios-clipboard${focused ? '' : '-outline'}`;
                    break;
                case 'Discovery':
                    iconName = `ios-bulb${focused ? '' : '-outline'}`;
                    break;
                case 'Marked':
                    iconName = `ios-podium${focused ? '' : '-outline'}`;
                    break;
                case 'Mine':
                    iconName = `ios-contact${focused ? '' : '-outline'}`;
                    break;
                default:
                    break;
            }
            return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
    }),
    tabBarOptions: {
        activeTintColor: 'skyblue',
        inactiveTintColor: 'gray',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    lazy:true,
};

const Tab = TabNavigator(TabRouteConfigs, TabNavigatorConfig);