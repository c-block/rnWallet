import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import GeneralButton from '../../components/generalButton';
import WalletProvider from '../../utils/WalletProvider';
import { connect } from 'react-redux';
import * as LoginAction from '../../config/action/LoginAction'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,1.0)',
        paddingBottom: 20,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
class PassWordScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View>
                    <GeneralButton
                        //to mnemonic screen 
                        onPress={
                            () => {
                                this.props.navigation.navigate('Home');
                                this.props.createWallet();
                            }}
                        text='Create mnemonic'
                    />
                    <Text>{this.props.mnemonic}</Text>
                </View>
            </SafeAreaView>
        )
    }
}
const mapStateToProps = state => ({
    mnemonic: state.createMnemonic.mnemonic,
});

const mapDispatchToProps = dispatch => ({
    createWallet: () => dispatch(LoginAction.createMnemonic(WalletProvider.generateMnemonic(), '123')),
});

export default connect(null, mapDispatchToProps)(PassWordScreen)