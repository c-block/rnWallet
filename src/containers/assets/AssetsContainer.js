import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

class AssetsHomeScreen extends Component {
    static navigationOptions = {
        headerTitle: "Assets",
    };
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button
                    title="Go to Detail"
                    color='skyblue'
                    onPress={() => this.props.navigation.navigate('AssetsDetail')}
                />
            </View>
        );
    }
}

class AssetsDetailScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: "AssetsDetail",
        headerLeft:(
            <Ionicons.Button 
            name="ios-arrow-back"
            size={25}
            color='skyblue'
            backgroundColor = 'rgba(255,255,255,0)'
            onPress={() => navigation.goBack()}
            />
        ),
        tabBarVisible:false,
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