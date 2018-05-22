import React from 'react';
import { StackNavigator, TabNavigator, TabBarBottom, SwitchNavigator } from 'react-navigation';
import {
    LoginScreen,
    PassWordScreen,
    AssetsContainer,
    DiscoveryContainer,
    MineContainer,
    MarkedContainer,
} from '../containers';
import Ionicons from 'react-native-vector-icons/Ionicons';


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
    lazy: true,
};

const HomeTab = TabNavigator(TabRouteConfigs, TabNavigatorConfig);

const CreateWalletNavigator = StackNavigator(
    {
        Login: { screen: LoginScreen },
        PassWord: { screen: PassWordScreen },
    },
    {
        initialRouteName: 'Login',
        headerMode: 'none',
        cardStyle: {
            backgroundColor: '#181724',
        }
    }
);

export default SwitchNavigator(
    {
        CreateWallet: CreateWalletNavigator,
        Home: HomeTab,
    },
    {
        initialRouteName: 'CreateWallet',
    }
);