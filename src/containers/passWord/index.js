import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import GeneralButton from '../../components/generalButton';
import walletUtils from '../../utils/walletUtils';
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

    createWallet(){
        walletUtils.generateMnemonic().then((mnemonic)=>{
            this.props.createWallet(mnemonic)
        })
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View>
                    <GeneralButton
                        //to mnemonic screen 
                        onPress={
                            () => {
                                this.props.navigation.navigate('Home');
                                this.createWallet();
                            }}
                        text='Create mnemonic'
                    />
                    <Text>{this.props.mnemonic}</Text>
                </View>
            </SafeAreaView>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    createWallet: (mnemonic) => dispatch(LoginAction.createMnemonic(mnemonic)),
});

export default connect(null, mapDispatchToProps)(PassWordScreen)