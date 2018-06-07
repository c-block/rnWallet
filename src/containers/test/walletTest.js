import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import HDWallet from 'react-native-hdwallet';
import walletUtils from 'react-native-hdwallet/src/utils/walletUtils';
import { connect } from 'react-redux';
import * as TestAction from '../../config/action/TestAction'

//const mnemonic = 'hood prison brick crane vault must define country three banner clip ridge'

class walletTest extends Component {
  createAddress = () => {
    walletUtils.generateMnemonic().then((data) => {
      const seed = walletUtils.mnemonicToSeed(data)
      const seedHex = seed.toString('hex')
      var hdwallet = HDWallet.fromMasterSeed(seed)
      const derivePath = "m/44'/60'/0'/0/0"
      hdwallet.setDerivePath(derivePath)
      const checksumAddress = hdwallet.getChecksumAddressString()
      this.props.walletTest(data, checksumAddress, derivePath, seedHex)
    }, (error) => {
      Alert.alert(
        'error',
        'mnemonic' + error.toString()
      )
    })
  }

  rpcTest = () => {
    if (this.props.address == '') {
      Alert.alert(
        'warning!',
        'you need to generate the address first'
      )
    } else {
      this.props.navigation.navigate('RpcTest')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView
          contentContainerStyle={{
            flex: Platform.OS === 'ios' ? 1 : null,
            justifyContent: 'center',
          }}
        >
          <View style={styles.element}>
            <Text style={styles.label}> mnemonic </Text>
            <View style={styles.inputRow}>
              <TextInput
                autoCorrect={false}
                editable={false}
                placeholder="12 word"
                placeholderTextColor="#E5E5E5"
                style={styles.input}
                value={this.props.mnemonic}
                multiline={true}
              />
            </View>
          </View>
          <View style={styles.element}>
            <Text style={styles.label}> seed </Text>
            <View style={styles.inputRow}>
              <TextInput
                autoCorrect={false}
                editable={false}
                placeholder="..."
                placeholderTextColor="#E5E5E5"
                style={styles.input}
                value={this.props.seed}
                multiline={true}
              />
            </View>
          </View>
          <View style={styles.element}>
            <Text style={styles.label}> path </Text>
            <View style={styles.inputRow}>
              <TextInput
                autoCorrect={false}
                editable={false}
                placeholder="m/60'/44'/0'/0/0"
                placeholderTextColor="#E5E5E5"
                style={styles.input}
                value={this.props.path}
                multiline={true}
              />
            </View>
          </View>
          <View style={styles.element}>
            <Text style={styles.label}> address </Text>
            <View style={styles.inputRow}>
              <TextInput
                autoCorrect={false}
                editable={false}
                placeholder="0x..."
                placeholderTextColor="#E5E5E5"
                style={styles.input}
                value={this.props.address}
                multiline={true}
              />
            </View>
          </View>
          <View style={styles.buttonView}>
            <TouchableOpacity
              style={styles.button}
              onPress={this.createAddress}
            >
              <Text style={styles.text}>create address</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonView}>
            <TouchableOpacity
              style={styles.button}
              onPress={this.rpcTest}
            >
              <Text style={styles.text}>rpc test</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'space-between',
    //paddingBottom: 15,
    marginTop: 20
  },
  element: {
    borderBottomColor: '#40E0D0',
    borderBottomWidth: 1,
    paddingHorizontal: 15,
    paddingTop: Platform.OS === 'ios' ? 20 : 30,
    paddingBottom: 15,
  },
  label: {
    color: '#9d9d9d',
    paddingLeft: Platform.OS === 'ios' ? 0 : 4,
    paddingBottom: Platform.OS === 'ios' ? 10 : 0,
  },
  inputRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    color: '#40E0D0',
    flex: 1,
    flexGrow: 1,
    fontSize: 18,
  },
  buttonView: {
    paddingHorizontal: 20,
    paddingTop: 20,
    marginTop: 5
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#40E0D0',
    borderRadius: 8,
    paddingVertical: 20,
  },
  text: {
    fontSize: 15,
    color: '#E5E5E5',
    fontWeight: 'bold'
  }
});

const mapStatToProps = state => ({
  mnemonic: state.Test.mnemonic,
  address: state.Test.address,
  path: state.Test.path,
  seed: state.Test.seed,
});

const mapDispatchToProps = dispatch => ({
  walletTest: (mnemonic, address, path, seed) => dispatch(TestAction.walletTest(mnemonic, address, path, seed)),
});

export default connect(mapStatToProps, mapDispatchToProps)(walletTest)