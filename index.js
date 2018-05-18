import { AppRegistry, YellowBox } from 'react-native';
import React, { Component } from 'react';
import './shim';
import HomeTab from './src/containers/HomeTab';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent('rnWallet', () => HomeTab);