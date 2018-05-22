import React, { Component } from 'react';
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class AssetsDetailScreen extends Component {
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
