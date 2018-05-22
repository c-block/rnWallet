import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
import GeneralButton from '../../components/generalButton';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,1.0)',
        paddingBottom: 20,
        paddingHorizontal: 15,
        alignItems:'center',
        justifyContent:'center',
    },
    buttonContainer: {
        width: '100%',
        paddingHorizontal: 15,
        alignItems:'center',
        justifyContent:'center',
    }
});

export default class LoginScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container} >
            <View style = {styles.buttonContainer}>
                <GeneralButton
                onPress = {() => this.props.navigation.navigate('PassWord')}
                text = 'Create wallet'
                />
                <GeneralButton
                onPress = {()=> this.props.navigation.navigate('Home')}
                text = 'Revover wallet'
                />
            </View>
            </SafeAreaView>

        )
    }
}