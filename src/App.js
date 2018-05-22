import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './config/store/ConfigureStore'
import Navigators from './navigators';


export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Navigators />
            </Provider>
        );
    }
}
