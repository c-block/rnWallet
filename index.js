import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import BaseComponent from './js/BaseComponent';

export default class App extends Component {
    render() {
        return (
            <BaseComponent />
        );
    }
}

AppRegistry.registerComponent('rnWallet', () => App);