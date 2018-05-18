import React, { Component } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GeneralButton from '../../components/GeneralButton';
import WalletProvider from '../../utils/WalletProvider';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonsContainer: {
        paddingHorizontal: 15,
        width: '100%',
    },
});

class AssetsHomeScreen extends Component {
    state = {
        mnemonicText: 'mnemonic:',
        seedText: 'seed:'
    }
    static navigationOptions = {
        headerTitle: "Assets",
    };
    render() {
        const mnemonic = WalletProvider.generateMnemonic()
        const address = WalletProvider.restoreWalletWithMnemonic(mnemonic)
        console.log('mnemonic:', mnemonic, 'address:', address)
        return (
            <View style={styles.container}>
                <Text>{this.state.mnemonicText}</Text>
                <GeneralButton
                    style={styles.buttonsContainer}
                    text='Create mnemonic'
                    onPress={() => {
                        this.setState(previousState => {
                            return { mnemonicText: previousState.mnemonicText + bip39.generateMnemonic('', randomBytes) }
                        });
                    }}
                />
            </View>
        );
    }
}

class AssetsDetailScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: "AssetsDetail",
        headerLeft: (
            <Ionicons.Button
                name="ios-arrow-back"
                size={25}
                color='skyblue'
                backgroundColor='rgba(255,255,255,0)'
                onPress={() => navigation.goBack()}
            />
        ),
        tabBarVisible: false,
    })

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            </View>
        );
    }
}

export default AssetsContainer = StackNavigator({
    AssetsHome: { screen: AssetsHomeScreen },
    AssetsDetail: { screen: AssetsDetailScreen },
},
    {
        navigationOptions: {
            headerTitleStyle: { fontSize: 18, color: 'skyblue' },
        },
        gesturesEnabled: true,
    }
);