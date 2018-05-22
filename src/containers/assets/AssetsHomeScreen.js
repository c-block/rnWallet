import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

class AssetsHomeScreen extends Component {
    static navigationOptions = {
        headerTitle: "Assets",
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.mnemonic}</Text>
            </View>
        );
    }

}

const mapStateToProps = state => ({
    mnemonic:state.createWallet.mnemonic
});

export default connect(mapStateToProps)(AssetsHomeScreen)