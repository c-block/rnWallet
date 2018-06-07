import React, { Component } from 'react';
import {
    Platform,
    View,
    StyleSheet,
    TouchableOpacity,
    Alert,
    Text,
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import * as TestAction from '../../config/action/TestAction'


const testoptions = ['ProtocolVersion', 'Accounts', 'BlockNumber', 'GetBalance', 'GetBlockByHash', 'GetBlockByNumber', 'GetTransactionByHash', 'SendTransaction']


 class rpcTest extends Component { 
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.dropdownView}>
                    <ModalDropdown
                        style={styles.dropdown}
                        options={testoptions}
                        onSelect={(index, value) => {
                            console.log('index:', index, 'value:', value)
                            this.props.selectApi(value)
                        }}
                    >
                    </ModalDropdown>
                </View>
                <KeyboardAwareScrollView
                    contentContainerStyle={{
                        flex: Platform.OS === 'ios' ? 1 : null,
                        justifyContent: 'center',
                    }}
                >
                    <View style={styles.buttonView}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={()=>{
                                Alert.alert(
                                    'rpcRequest',
                                    this.props.api
                                )
                            }}
                        >
                        <Text style = {styles.text}> {this.props.api ? this.props.api:'request'} </Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    dropdownView: {
        paddingHorizontal: 20,
        paddingTop: 5,
    },
    dropdown: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    buttonView: {
        paddingHorizontal: 10,
        paddingTop: 10,
        marginTop: 5,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#40E0D0',
        borderRadius: 8,
        paddingVertical: 10,
    },
    text:{
        fontSize:15,
        color:'#E5E5E5',
        fontWeight:'bold'
    }
});

const mapStateToProps = state => ({
    api: state.Test.api
});

const mapDispatchToProps = dispatch => ({
    selectApi: (api) => dispatch(TestAction.selectApi(api))
});

export default connect(mapStateToProps, mapDispatchToProps)(rpcTest)
