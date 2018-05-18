import bip39 from 'bip39';
import hdkey from 'ethereumjs-wallet/hdkey';

export default class WalletProvider {
    static generateHDWallet(passWoard) {
        const mnemonic = bip39.generateMnemonic()
        const seed = bip39.mnemonicToSeed(mnemonic, passWoard)
        const hdWallet = hdkey.fromMasterSeed(seed)
        const ethRoot = hdWallet.derivePath("m/44'/60'/0'/0/0")
        return ethRoot.getWallet().getChecksumAddressString()
    }

    static generateMnemonic() {
        return bip39.generateMnemonic()
    }

    static restoreWalletWithMnemonic(mnemonic, passWoard) {
        const seed = bip39.mnemonicToSeed(mnemonic, passWoard)
        const hdWallet = hdkey.fromMasterSeed(seed)
        const ethRoot = hdWallet.derivePath("m/44'/60'/0'/0/0")
        return ethRoot.getWallet().getChecksumAddressString()
    }

}